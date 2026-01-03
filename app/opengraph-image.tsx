import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'withnco — Engineering Partners for Startups';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAF9F7',
          padding: '80px',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '40px',
            color: '#1A1A1A',
          }}
        >
          <span>with</span>
          <span style={{ color: '#C67B5C' }}>&</span>
          <span>co</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 40,
            fontWeight: 400,
            color: '#4A4A4A',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Engineering Partners for Startups
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
