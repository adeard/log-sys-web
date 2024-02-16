import React from 'react'
import { Layout } from 'antd';

const { Footer } = Layout;

export default function Foot() {
  return (
    <div>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Log System ©2024 SIMP
        </Footer>
    </div>
  )
}
