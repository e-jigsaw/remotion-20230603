import { Video, staticFile, Sequence } from 'remotion';
import { Cc } from './CC';

export const MyComposition = () => {
  return (
    <>
      <Sequence durationInFrames={2653}>
        <Video src={staticFile('v1.mp4')} style={{ margin: '0 auto' }} />
      </Sequence>
      <Sequence from={2653} durationInFrames={3574}>
        <Video src={staticFile('v2.mp4')} style={{ margin: '0 auto' }} />
      </Sequence>
      <Sequence from={6227}>
        <Video src={staticFile('v3.mp4')} style={{ margin: '0 auto' }} />
      </Sequence>
      <Cc />
    </>
  );
};
