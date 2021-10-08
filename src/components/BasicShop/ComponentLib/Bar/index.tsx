import React, { memo, useEffect } from 'react';
import { Chart } from '@antv/g2';
import { colors } from '@/components/BasicShop/common';
import { Bar } from '@/utils/icon/Icons';
// import req from '@/utils/req'

import { BarConfigType } from './schema';

interface BarComponentProps extends BarConfigType {
  isTpl: boolean;
  id: string;
}

const BarComponent: React.FC<BarComponentProps> = ({
  isTpl,
  id,
  data,
  width,
  height,
  toggle,
  legendPosition,
  legendLayout,
  legendShape,
  labelColor,
  axisColor,
  multiColor,
  tipEvent,
  titleEvent,
  dataType,
  apiAddress,
  apiMethod,
  apiData,
  refreshTime,
}) => {
  useEffect(() => {
    let timer: any = null;
    if (!isTpl) {
      const chart = new Chart({
        container: `bar-${id}`,
        autoFit: true,
        width,
        height,
      });

      if (dataType === 'dynamic' && apiAddress) {
        const method = apiMethod.toUpperCase();
        const getChartData = () => {
          fetch(apiAddress, { method, [method === 'POST' ? 'body' : '']: apiData })
            .then(res => res.json())
            .then(res => {
              if (res) {
                const dataX = res.map(item => ({ ...item, value: Number(item.value) }));
                chart.data(dataX);
                chart.render();
              } else {
                chart.data([]);
              }
            });
        };
        // 如果设置了刷新时间
        if (refreshTime > 0 && location.pathname.indexOf('/editor') < 0) {
          timer = setInterval(() => {
            getChartData();
          }, refreshTime);
        } else {
          getChartData();
        }
      } else {
        const dataX = data.map(item => ({ ...item, value: Number(item.value) }));
        chart.data(dataX);
      }

      chart.legend(
        toggle
          ? {
              position: legendPosition,
              layout: legendLayout,
              marker: {
                symbol: legendShape,
              },
            }
          : false,
      );

      chart.tooltip({
        showTitle: false,
        showMarkers: false,
      });

      chart.scale({
        value: {
          nice: true,
        },
      });

      chart.axis('name', {
        label: { style: { fill: labelColor } },
        line: { style: { stroke: axisColor } },
        tickLine: null,
      });
      chart.axis('value', {
        label: { style: { fill: labelColor } },
        line: { style: { stroke: axisColor } },
      });

      chart
        .interval()
        .position('name*value')
        .color(
          'name',
          data.map((_, i) => (multiColor[i] ? multiColor[i] : colors[i % 7])),
        );

      chart.coordinate().transpose();
      chart.interaction('element-active');

      chart.render();
    }

    return () => {
      clearInterval(timer);
    };
  }, []);

  return isTpl ? <Bar /> : <div id={`bar-${id}`} />;
};

export default memo(BarComponent);
