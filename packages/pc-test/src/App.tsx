import React from 'react'

import { Button } from '@react-component-library/mobile'

function App() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Mobile Component Test</h1>
            <div style={{ marginBottom: '20px' }}>
                <Button variant="primary">Primary Button</Button>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <Button variant="secondary">Secondary Button</Button>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <Button variant="danger">Danger Button</Button>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <Button variant="success">Success Button</Button>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <Button size="small">Small Button</Button>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <Button size="large">Large Button</Button>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <Button disabled>Disabled Button</Button>
            </div>
        </div>
    )
}

export default App