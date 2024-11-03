'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const dummyData = [
  { month: 'Jan', energy: 400 },
  { month: 'Feb', energy: 300 },
  { month: 'Mar', energy: 600 },
  { month: 'Apr', energy: 800 },
  { month: 'May', energy: 700 }
]

export function ImpactMetrics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Energy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">2,800 kWh</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Carbon Offset</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1.2 tons</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Trees Equivalent</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">20 trees</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Energy Production Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dummyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="energy" 
                  stroke="#2563eb" 
                  strokeWidth={2} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}