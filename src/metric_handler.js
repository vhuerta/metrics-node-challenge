/**
 * Metrics map, it stores the reported values for each metric
 */
const METRICS_MAP = new Map();

/** Metric getter and setter */
_getMetric = (metric) => METRICS_MAP.get(metric) || [];
_setMetric = (metric, records) => METRICS_MAP.set(metric, records);

/** Filter the records for the last hour */
_cleanup = (records) => {
  const oneHourAgo = new Date().setHours(new Date().getHours() - 1);
  return records.filter(({ date }) => date >= oneHourAgo);
};

/** Add a metric record and remove the records older than an hour */
_addAndCleanup = (metric, value) => {
  const date = new Date();
  const records = _getMetric(metric).concat([{ value, date }]);
  return _setMetric(metric, _cleanup(records));
};

/** Return the sum of the values reported in the most recent hour */
_sumAndCleanup = (metric) => {
  const records = _cleanup(_getMetric(metric));
  _setMetric(metric, records);
  return Math.round(records.reduce((sum, { value }) => sum + value, 0));
};

function postMetric(req, res) {
  const { metric } = req.params;
  const { value } = req.body;
  _addAndCleanup(metric, value);
  return res.status(200).send({});
}

function getMetric(req, res) {
  const { metric } = req.params;
  return res.status(200).send({ value: _sumAndCleanup(metric) });
}

module.exports = {
  postMetric,
  getMetric,
};
