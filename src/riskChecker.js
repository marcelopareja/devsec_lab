function evaluateRisk(vulns, dependencies) {
  if (dependencies === 0) return 0;

  const ratio = vulns / dependencies;

  if (ratio === 0) return 'LOW';
  if (ratio < 0.2) return 'MEDIUM';
  return 'HIGH';
}

module.exports = { evaluateRisk };
