import { useEffect, useRef, useState, useMemo } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import Legend from "@arcgis/core/widgets/Legend";
import Graphic from "@arcgis/core/Graphic";

/* ============================
   NORTHERN SAMAR PROJECT DATA
============================ */
const PROJECTS = [
  {
    id: 1,
    project_name: "Farm-to-Market Road",
    district: "1st District",
    barangay: "Dalakit",
    status: "Ongoing",
    coords: [124.64, 12.33],
  },
  {
    id: 2,
    project_name: "Health Center",
    district: "1st District",
    barangay: "Narra",
    status: "Completed",
    coords: [124.67, 12.31],
  },
  {
    id: 3,
    project_name: "Flood Control",
    district: "2nd District",
    barangay: "Baybay",
    status: "Delayed",
    coords: [124.45, 12.52],
  },
  {
    id: 4,
    project_name: "School Building",
    district: "2nd District",
    barangay: "San Isidro",
    status: "Ongoing",
    coords: [124.48, 12.55],
  },
];

/* ============================
   DISTRICT POLYGONS
============================ */
const DISTRICT_GEOJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { district: "1st District" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [124.55, 12.25],
            [124.75, 12.25],
            [124.75, 12.4],
            [124.55, 12.4],
            [124.55, 12.25],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { district: "2nd District" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [124.35, 12.45],
            [124.55, 12.45],
            [124.55, 12.65],
            [124.35, 12.65],
            [124.35, 12.45],
          ],
        ],
      },
    },
  ],
};

export default function ArcGis() {
  const mapDiv = useRef(null);
  const viewRef = useRef(null);
  const projectLayerRef = useRef(null);

  const [selectedDistrict, setSelectedDistrict] = useState("All");
  const [selectedBarangay, setSelectedBarangay] = useState("All");
  const [hoverProject, setHoverProject] = useState(null);

  /* ============================
     FILTER LOGIC
  ============================ */
  const districts = useMemo(
    () => ["All", ...new Set(PROJECTS.map((p) => p.district))],
    []
  );

  const barangays = useMemo(() => {
    return [
      "All",
      ...new Set(
        PROJECTS.filter(
          (p) => selectedDistrict === "All" || p.district === selectedDistrict
        ).map((p) => p.barangay)
      ),
    ];
  }, [selectedDistrict]);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      return (
        (selectedDistrict === "All" || p.district === selectedDistrict) &&
        (selectedBarangay === "All" || p.barangay === selectedBarangay)
      );
    });
  }, [selectedDistrict, selectedBarangay]);

  /* ============================
     MAP INIT
  ============================ */
  useEffect(() => {
    const map = new Map({
      basemap: "streets-navigation-vector",
    });

    const view = new MapView({
      container: mapDiv.current,
      map,
      center: [124.55, 12.45],
      zoom: 9,
    });

    viewRef.current = view;

    const districtLayer = new GeoJSONLayer({
      source: DISTRICT_GEOJSON,
      title: "Northern Samar Districts",
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-fill",
          color: [0, 0, 0, 0.05],
          outline: { color: "#1e40af", width: 2 },
        },
      },
    });

    map.add(districtLayer);

    const projectLayer = new FeatureLayer({
      source: [],
      fields: [
        { name: "id", type: "oid" },
        { name: "project_name", type: "string" },
        { name: "district", type: "string" },
        { name: "barangay", type: "string" },
        { name: "status", type: "string" },
      ],
      objectIdField: "id",
      popupTemplate: {
        title: "{project_name}",
        content: `
          District: {district}<br/>
          Barangay: {barangay}<br/>
          Status: {status}
        `,
      },
      renderer: {
        type: "unique-value",
        field: "status",
        uniqueValueInfos: [
          {
            value: "Completed",
            symbol: { type: "simple-marker", color: "green", size: 12 },
          },
          {
            value: "Ongoing",
            symbol: { type: "simple-marker", color: "orange", size: 12 },
          },
          {
            value: "Delayed",
            symbol: { type: "simple-marker", color: "red", size: 12 },
          },
        ],
      },
    });

    projectLayerRef.current = projectLayer;
    map.add(projectLayer);

    view.ui.add(new Legend({ view }), "bottom-left");

    return () => view.destroy();
  }, []);

  /* ============================
     UPDATE PROJECTS + AUTO ZOOM
  ============================ */
  useEffect(() => {
    if (!projectLayerRef.current || !viewRef.current) return;

    const layer = projectLayerRef.current;
    const view = viewRef.current;

    layer.source.removeAll();

    if (filteredProjects.length === 0) return;

    const graphics = filteredProjects.map(
      (p) =>
        new Graphic({
          geometry: {
            type: "point",
            longitude: p.coords[0],
            latitude: p.coords[1],
          },
          attributes: p,
        })
    );

    layer.source.addMany(graphics);

    // 🔥 AUTO MOVE / ZOOM MAP
    view
      .goTo(
        {
          target: graphics,
          zoom: filteredProjects.length === 1 ? 13 : 10,
        },
        {
          duration: 800,
          easing: "ease-in-out",
        }
      )
      .catch(() => {});
  }, [filteredProjects]);

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3">
        <div ref={mapDiv} className="h-[75vh] rounded border" />
      </div>

      <div className="col-span-1 bg-white p-4 rounded shadow space-y-4">
        <h3 className="font-bold">Project Filter</h3>

        <select
          value={selectedDistrict}
          onChange={(e) => {
            setSelectedDistrict(e.target.value);
            setSelectedBarangay("All");
          }}
          className="w-full border p-1"
        >
          {districts.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>

        <select
          value={selectedBarangay}
          onChange={(e) => setSelectedBarangay(e.target.value)}
          className="w-full border p-1"
        >
          {barangays.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
