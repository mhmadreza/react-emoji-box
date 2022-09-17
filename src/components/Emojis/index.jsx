import PropType from 'prop-types';

import EmojiBox from '../EmojiBox'
import styles from './Emojis.module.css';

const Emojis = ({emojisData}) => {
    return (
       <div className={styles.emojisGrid}>
        {emojisData.map((data, index) => (
            <EmojiBox 
            key={index}
            title={data.title}
            symbol={data.symbol} 
            />
        ))}
       </div> 
    )
}

Emojis.propType = {
    emojisData: PropType.array
}

export default Emojis;