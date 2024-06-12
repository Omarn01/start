import { useState } from 'react'

import style from './Main.module.scss'

export default function Main() {
  const [count, setCount] = useState(0)

  return (
    <div className={style.main}>
      <div className={style.info}>
        <div className={style.onclick}>
          <h4>on tap</h4>
          <div>+1</div>
        </div>
        <div className={style.onhour}>
          <h4>on hour</h4>
          <div>+1</div>
        </div>
      </div>
      <div className={style.counter}>
        <div className={style.count}>{count}</div>
        <button
          className={style.click}
          onClick={() => setCount(prev => (prev += 1))}
        >
          Click
        </button>
      </div>
      <div className={style.navigation}>
        <button>Shop</button>
      </div>
    </div>
  )
}
