import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #C17F53 0%, #A86941 100%)',
          borderRadius: '6px',
          fontSize: 22,
          fontWeight: 600,
          color: '#FEFCF9',
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          letterSpacing: '-0.5px',
        }}
      >
        S
      </div>
    ),
    { ...size }
  )
}