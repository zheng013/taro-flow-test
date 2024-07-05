import React, { useEffect, useState } from 'react'
import { Progress } from '@tarojs/components'

interface LoadingProgressViewProps {
    setLoading: (loading: boolean) => void,
    className: string
}

const LoadingProgressView: React.FC<LoadingProgressViewProps> = ({ setLoading, ...restProps }) => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (progress < 100) {
                setProgress(progress + 0.5)
            } else {
                clearTimeout(timeoutId)
                setLoading(false)
            }
        }, 1)
        return () => clearTimeout(timeoutId)
    }, [progress])
    return (<Progress {...restProps} activeColor="#FF4613" percent={progress} strokeWidth={4} />)
}
export default LoadingProgressView