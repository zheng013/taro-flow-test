import * as echarts from 'echarts/core';
import {
  BarChart,
  BoxplotChart,
  CandlestickChart,
  CustomChart,
  EffectScatterChart,
  FunnelChart,
  GaugeChart,
  GraphChart,
  HeatmapChart,
  LineChart,
  LinesChart,
  MapChart,
  ParallelChart,
  PictorialBarChart,
  PieChart,
  RadarChart,
  SankeyChart,
  ScatterChart,
  SunburstChart,
  ThemeRiverChart,
  TreeChart,
  TreemapChart
} from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  VisualMapComponent,
  ToolboxComponent,
  DataZoomComponent,
  GraphicComponent,
  PolarComponent,
  TimelineComponent,
  BrushComponent,
  MarkLineComponent,
  MarkAreaComponent,
  MarkPointComponent,
  SingleAxisComponent,
  ParallelComponent,
  CalendarComponent,
  GeoComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';
import { SVGRenderer, SkiaChart as SkiaComponent, SvgChart as SvgComponent } from 'wrn-echarts';
import { View } from '@tarojs/components';

import beef from './beef';
import './echarts.scss';

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  DataZoomComponent,
  ToolboxComponent,
  GraphicComponent,
  PolarComponent,
  VisualMapComponent,
  TimelineComponent,
  BrushComponent,
  ParallelComponent,
  CalendarComponent,
  DatasetComponent,
  CustomChart,
  DataZoomComponent,
  ThemeRiverChart,
  PictorialBarChart,
  GaugeChart,
  FunnelChart,
  SankeyChart,
  ParallelChart,
  SunburstChart,
  TreeChart,
  TreemapChart,
  GraphChart,
  BoxplotChart,
  RadarChart,
  CandlestickChart,
  BarChart,
  LineChart,
  LinesChart,
  HeatmapChart,
  EffectScatterChart,
  ScatterChart,
  MapChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  SVGRenderer,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
  MarkAreaComponent,
  SingleAxisComponent,
  GeoComponent,
]);

echarts.registerMap('Beef_cuts_France', { svg: beef });

const E_HEIGHT = 320;
const E_WIDTH = Dimensions.get('screen').width;

export default function EchartsPage({ option }) {
  const svgRef = useRef<any>(null);
  const skiaRef = useRef<any>(null);
  useEffect(() => {
    let chart;
    if (svgRef.current) {
      // @ts-ignore
      chart = echarts.init(svgRef.current, 'light', {
        renderer: 'svg',
        width: E_WIDTH,
        height: E_HEIGHT
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, []);

  useEffect(() => {
    let chart;
    if (skiaRef.current) {
      // @ts-ignore
      chart = echarts.init(skiaRef.current, 'light', {
        renderer: 'svg',
        width: E_WIDTH,
        height: E_HEIGHT
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, []);

  return (
    <View>
      <View className='charts-container'>
        <View className='charts-render'>React Native SVG</View>
        <SvgComponent ref={svgRef} />
      </View>
      <View className='charts-container'>
        <View className='charts-render'>React Native Skia</View>
        <SkiaComponent ref={skiaRef} />
      </View>
    </View>
  );
}
