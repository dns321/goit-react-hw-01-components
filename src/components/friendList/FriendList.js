import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendList.module.css'

const FriendList = ({friends}) => (
    <ul className={style.items}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li className={style.item} key={id}>
            <span className={style.status} style={{
              backgroundColor: isOnline ? 'rgb(0, 105, 0)' : 'rgb(253, 0, 0)'}}></span>
            <img className={style.avatar} src={avatar} alt="" width="48" />
            <p className={style.name}>{name}</p>
          </li>
        ))}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,        
    })).isRequired,
}

export default FriendList;