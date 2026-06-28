import { useState, useEffect } from 'react';
import { projectsData } from '../config/projects';
import { iconMap } from '../config/iconMap';

// Module-level cache so multiple consumers share one fetch
let _cache = null;

function hydrateIcons(data) {
  return data.map((p) => ({ ...p, icon: iconMap[p.icon] ?? iconMap.Zap }));
}

export function useProjects() {
  const [projects, setProjects] = useState(_cache ?? projectsData);
  const [loading, setLoading] = useState(_cache === null);

  useEffect(() => {
    if (_cache !== null) {
      setLoading(false);
      return;
    }

    fetch(`${import.meta.env.BASE_URL}projects.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => {
        _cache = hydrateIcons(data);
        setProjects(_cache);
      })
      .catch(() => {
        // Silently fall back to the static import — no blank screen
        _cache = projectsData;
        setProjects(projectsData);
      })
      .finally(() => setLoading(false));
  }, []);

  return { projects, loading };
}
