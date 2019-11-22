import { Fragment, PureComponent } from 'react';

import echarts from 'echarts';
import 'echarts/theme/macarons';

import { AdminLayout, Amap } from '@/components';

import './index.less';

class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getTypes();
    this.getLifeCircle();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  /* 监听浏览器屏幕重置 */
  handleResize = () => {
    const types = echarts.init(this.types, 'macarons');
    const lifeCircle = echarts.init(this.lifeCircle, 'macarons');
    types.resize();
    lifeCircle.resize();
  };

  getLifeCircle = () => {
    const lifeCircle = echarts.init(this.lifeCircle, 'macarons');
    const option = {
      title: {
        text: '生命周期',
      },
      tooltip: {
        formatter: function(params) {
          var data = params.data || [0, 0];
          return data[2] + ': ' + data[0].toFixed(2) + ', ' + data[1].toFixed(2);
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        axisLine: { onZero: false },
      },
      yAxis: {
        type: 'value',
        axisLine: { onZero: false },
      },
      series: [
        {
          id: 'a',
          type: 'line',
          smooth: true,
          symbolSize: 20,
          data: [[15, 0, 2014], [50, 10, 2015], [56.5, 20, 2016], [46.5, 30, 2017], [22.1, 40, 2018]],
        },
      ],
    };
    lifeCircle.setOption(option);
  };

  getTypes = () => {
    const types = echarts.init(this.types, 'macarons');
    const option = {
      title: {
        text: '查询类型',
        x: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['招生', '复试', '调剂'],
      },
      calculable: false,
      series: [
        {
          name: '访问量',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 85000, name: '招生' },
            { value: 102000, name: '复试' },
            { value: 65200, name: '调剂' },
          ],
        },
      ],
    };
    types.setOption(option);
  };

  render() {
    return (
      <AdminLayout hasLeft={false}>
        <div id="home-page">
          <div className="echarts-amap">
            <div className="echarts clearfix">
              <div className="echarts-block" ref={element => {
                this.types = element;
              }}/>
              <div className="echarts-block" ref={element => {
                this.lifeCircle = element;
              }}/>
            </div>
            <Amap/>
          </div>
        </div>
        <Fragment/>
      </AdminLayout>
    );
  }
}

export default HomePage;
