import React from 'react'

export default function SkillCard({name}){
  return (
    <div className="bg-gray-900 border border-gray-700 rounded p-4 text-center">
      <div className="font-semibold text-primary">{name}</div>
    </div>
  )
}
