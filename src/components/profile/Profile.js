import React from 'react';
import PropTypes from 'prop-types';
import style from './Profile.module.css'


const Profile = ({url, name, tag, location, stats}) => (
        <div className={style.profile}>
          <div className={style.description}>
                <img
                    src={url}
                    alt="Аватар пользователя"
                    className={style.avatar}
                />
                <p className={style.name}>{name}</p>
                <p className={style.tag}>{tag}</p>
                <p className={style.location}>{location}</p>
          </div>

            <ul className={style.stats}>
                <li className={style.item}>
                    <span className={style.label}>Followers </span>
                    <span className={style.quantity}>{stats.followers}</span>
                </li>
                <li className={style.item}>
                    <span className={style.label}>Views </span>
                    <span className={style.quantity}>{stats.views}</span>
                </li>
                <li className={style.item}>
                    <span className={style.label}>Likes </span>
                    <span className={style.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
);

Profile.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,

};

export default Profile;