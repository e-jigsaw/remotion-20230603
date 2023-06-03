import { Sequence } from 'remotion';

const FONT_FAMILY = 'SF Pro Text, Helvetica, Arial, sans-serif';
const scripts = [
  {
    t: 'よくわからんけど勝った回',
    d: 100,
    s: 0,
  },
  {
    t: 'ダブリかよ〜〜〜〜',
    d: 100,
    s: 108,
  },
  {
    t: 'しかも一発か〜い',
    d: 100,
    s: 342,
  },
  {
    t: '親かぶりだし最悪だ',
    d: 100,
    s: 783,
  },
  {
    t: 'イイ感じメンツできてきた',
    d: 100,
    s: 1842,
  },
  {
    t: 'う〜〜〜ん',
    d: 100,
    s: 2034,
  },
  {
    t: 'また一発か〜い',
    d: 100,
    s: 2239,
  },
  {
    t: 'なんやかんやあって南2局',
    d: 100,
    s: 2653,
  },
  {
    t: '三色みつつ',
    d: 100,
    s: 2941,
  },
  {
    t: '門前でいくか迷ってる',
    d: 100,
    s: 3479,
  },
  {
    t: '反射的に1M鳴いてしまった',
    d: 100,
    s: 3917,
  },
  {
    t: '一盃口狙った方がよかったかもしれんが',
    d: 100,
    s: 4050,
  },
  {
    t: 'ドラだしなあ',
    d: 100,
    s: 4150,
  },
  {
    t: 'これ純全帯よしか...?',
    d: 100,
    s: 4843,
  },
  {
    t: '1Sは嬉しい',
    d: 100,
    s: 5300,
  },
  {
    t: '1S重なった〜〜〜！',
    d: 100,
    s: 5731,
  },
  {
    t: 'やったぜ',
    d: 100,
    s: 5858,
  },
  {
    t: '3着死守でいきます',
    d: 100,
    s: 6232,
  },
  {
    t: '南ポンするか迷い中',
    d: 100,
    s: 6579,
  },
  {
    t: '暗刻はうれしい',
    d: 100,
    s: 6766,
  },
  {
    t: '雀頭は決めた',
    d: 100,
    s: 7007,
  },
  {
    t: '4Sも嬉しい',
    d: 100,
    s: 7233,
  },
  {
    t: 'キター',
    d: 100,
    s: 7421,
  },
  {
    t: 'ありがとな',
    d: 100,
    s: 7605,
  },
  {
    t: '裏1はデカい',
    d: 100,
    s: 7886,
  },
  {
    t: 'トップまで300差',
    d: 100,
    s: 7998,
  },
  {
    t: 'ん？',
    d: 100,
    s: 8098,
  },
  {
    t: '！？',
    d: 100,
    s: 8198,
  },
  {
    t: 'ダブリー返しや！',
    d: 100,
    s: 8344,
  },
  {
    t: 'ありがとな〜〜',
    d: 100,
    s: 8599,
  },
  {
    t: '麻雀ってこういうことあるんだなあ',
    d: 100,
    s: 8847,
  },
];

export const Cc: React.FC = () => {
  return (
    <>
      {scripts.map(({ t, d, s }, index) => (
        <Sequence key={index} durationInFrames={d} from={s}>
          <div
            style={{
              position: 'absolute',
              bottom: 120,
              textAlign: 'center',
              fontSize: 60,
              backgroundColor: '#bd3129',
              color: '#fff',
              fontWeight: 'bold',
              left: '50%',
              transform: 'translate(-50%,0)',
              padding: '10px 20px',
              fontFamily: FONT_FAMILY,
              zIndex: 999,
              width: '80vw',
            }}
          >
            {t}
          </div>
        </Sequence>
      ))}
    </>
  );
};
