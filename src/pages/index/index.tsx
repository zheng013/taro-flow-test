import { View, Image, Text, Input } from '@tarojs/components'
import LoadingProgressView from '../../components/loading-process'
import './index.scss'
import Taro from '@tarojs/taro'
import { useState } from 'react'


function Index() {
  const [loading, setLoading] = useState(false)
  const [source, setSource] = useState<string | null>(null);

  const sendMessage = () => {
    setLoading(true)
    Taro.showToast({
      title: '发送成功'
    })
  }

  return (
    <View className='index'>
      <View className='control'>
        {loading && <LoadingProgressView className='loading' setLoading={setLoading} />}
        {source && <Image className='img-bg' src={source} />}
        <Image className='img-bg' src={require('./assets/bg.png')} />
        <View className='title-pannel'>
          <View className='avatar' >
            <View className='avatar-logo'></View>
            <Text>swift paul132</Text>
          </View>
          <Image className='img-icon' src={require('./assets/close.png')} />
        </View>
        <View className='handler-pannel'>
          <Image className='img-icon-camera' onClick={() => {
            Taro.chooseImage({
              count: 3,
              sourceType: ['camera'],
              success: res => {
                // setTempFilePath(res.tempFilePaths);
                setSource(res.tempFilePaths[0])
              },
              fail: err => {
                console.log(err);
              }
            })
          }} src={require('./assets/camera.png')} />
          <Input className='input' placeholder='send message'></Input>
          <Image onClick={sendMessage} className='img-icon' src={require('./assets/send.png')} />
        </View>
      </View>
    </View>
  )
}
export default Index