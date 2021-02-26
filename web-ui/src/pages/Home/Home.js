import React from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'shards-react';
import SmallStats from '../../components/SmallStats/SmallStats';

export default function Home() {
  const smallStats = [
    {
      label: 'Water',
      value: '14.5',
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: '6', sm: '6' },
      datasets: [
        {
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(0, 184, 216, 0.1)',
          borderColor: 'rgb(0, 184, 216)',
          data: [1, 2, 3, 3, 3, 4, 4],
        },
      ],
    },
  ];

  return (
    <>
      <Row>
        {smallStats.map((stats, idx) => (
          <Col className="mb-4" key={idx} {...stats.attrs}>
            <SmallStats
              chartData={stats.datasets}
              chartLabels={stats.chartLabels}
              label={stats.label}
              value={stats.value}
              increase={stats.increase}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <h3>Actions</h3>
          <Card>
            <CardBody>
              <CardTitle>Add new</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
