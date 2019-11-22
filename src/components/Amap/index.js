import React, { Component } from 'react';
import { Map, Markers, InfoWindow } from 'react-amap';
import { Spin } from 'antd';
import { fetchProvinces } from '@/request/apis';

import './index.less';

const AMAP_KEY = 'b6c433f58892d334fdd3bf6a5f0414ff';
const VERSION = '1.4.2';

export default class AMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      size: { width: 200, height: 140 },
      offset: [5, -50],
      zoom: 5,
      position: { longitude: 116.40, latitude: 39.90 },
      visible: false,
      id: null,
      name: '',
      num: 0,
      loading: false,
    };
  }

  showLoading = () => {
    this.setState(prevState => ({ loading: true }));
  };

  hideLoading = () => {
    this.setState(prevState => ({ loading: false }));
  };

  fetchProvinces = async () => {
    this.showLoading();
    try {
      let response = await fetchProvinces(), provinces = response.data.provinces;
      let markers = provinces.map(province => {
        let [longitude, latitude] = province.lonlat;

        return {
          position: { longitude, latitude },
          extData: {
            position: { longitude, latitude },
            id: province.id,
            name: province.name,
            num: province.num,
          },
        };
      });
      let { position, id, name, num } = markers[0].extData;

      this.setState(prevState => ({ markers, position, id, name, num, visible: true }));
    } catch (error) {
      console.log(error);
    } finally {
      this.hideLoading();
    }
  };

  componentDidMount() {
    this.fetchProvinces();
  }

  renderMarkerLayout = extData => (
    <div
      className='marker-dot'
      onClick={e => {
        let { position, id, name, num } = extData.extData;
        this.setState(prevState => ({ position, id, name, num }));
      }}/>
  );

  render() {
    let { loading, markers, size, position, zoom, visible, offset, id, name, num } = this.state;

    return (
      <Spin spinning={loading} id="amap">
        <div className="amap-container">
          <Map
            amapkey={AMAP_KEY} version={VERSION}
            mapStyle={'blue_night'}
            zoom={zoom}
            center={position}
          >
            <Markers
              markers={markers}
              render={this.renderMarkerLayout}
            />
            <InfoWindow
              position={position}
              visible={visible}
              isCustom={true}
              size={size}
              offset={offset}
            >
              <ul className="info-window">
                <li className="info-line">
                  <span className="info-window-title">{name}</span>
                  <a className="contrast-btn" href={`#/detail/${id}`}>数据详情</a>
                </li>
                <li className="info-window-body info-line clearfix">
                  <span className="left">
                    访问量：
                  </span>
                  <span className="right">
                    {num}
                  </span>
                </li>
              </ul>
            </InfoWindow>
          </Map>
        </div>
      </Spin>
    );
  }
}
