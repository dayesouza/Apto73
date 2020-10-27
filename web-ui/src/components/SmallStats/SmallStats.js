import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';
import { Card, CardBody } from 'shards-react';
import './SmallStats.scss';

import Chart from '../../helpers/Chart/Chart';

class SmallStats extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartOptions = {
      ...{
        maintainAspectRatio: true,
        responsive: true,
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
          custom: false,
        },
        elements: {
          point: {
            radius: 0,
          },
          line: {
            tension: 0.33,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: false,
              scaleLabel: false,
              ticks: {
                display: false,
                isplay: false,
                // Avoid getting the graph line cut of at the top of the canvas.
                // Chart.js bug link: https://github.com/chartjs/Chart.js/issues/4790
                suggestedMax: Math.max(...this.props.chartData[0].data) + 1,
              },
            },
          ],
        },
      },
      ...this.props.chartOptions,
    };

    const chartConfig = {
      ...{
        type: 'line',
        data: {
          ...{
            labels: this.props.chartLabels,
          },
          ...{
            datasets: this.props.chartData,
          },
        },
        options: chartOptions,
      },
      ...this.props.chartConfig,
    };

    new Chart(this.canvasRef.current, chartConfig);
  }

  render() {
    const { label, value, percentage, increase } = this.props;

    const percentageClasses = classNames(
      'stats-small__percentage',
      `stats-small__percentage--${increase ? 'increase' : 'decrease'}`
    );

    return (
      <Card small className="stats-small">
        <CardBody className="p-0 d-flex">
          <div className="flex-column m-auto">
            <div className="stats-small__data text-center">
              <span className="stats-small__label text-uppercase">{label}</span>
              <h6 className="stats-small__value count my-3">{value}</h6>
            </div>
            {percentage && (
              <div className="stats-small__data">
                <span className={percentageClasses}>{percentage}</span>
              </div>
            )}
          </div>
          <canvas
            height="120"
            ref={this.canvasRef}
            className={`stats-small-${shortid()}`}
          />
        </CardBody>
      </Card>
    );
  }
}

SmallStats.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  increase: PropTypes.bool,
  chartConfig: PropTypes.object,
  chartOptions: PropTypes.object,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.array,
};

SmallStats.defaultProps = {
  increase: true,
  percentage: 0,
  value: 0,
  label: 'Label',
  chartOptions: Object.create(null),
  chartConfig: Object.create(null),
  chartData: [],
  chartLabels: [],
};

export default SmallStats;
