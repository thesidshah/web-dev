import {useDispatch} from "react-redux";
import React from "react";
import {updateTuit} from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {

        if(!tuit.liked) {
            updateTuit(dispatch, {
                ...tuit,
                liked: true,
                stats: {
                    ...tuit.stats,
                    likes: tuit.stats.likes + 1
                }
            })
        }
        else {
            updateTuit(dispatch, {
                ...tuit,
                liked: false,
                stats: {
                    ...tuit.stats,
                    likes: tuit.stats.likes - 1
                }
            })
        }
    };
    return (
        <div className="wd-icon-links">
            <a href="/" className="wd-icon-link"><i className='fa fa-comment'/> {tuit.stats.comments}</a>
            <a href="/" className="wd-icon-link"><i className="fa fa-retweet"/> {tuit.stats.retuits}</a>
            <span onClick={likeTuit}>
    {
        tuit.liked &&
        <i className="fas fa-heart me-1"
           style={{color: 'red'}}/>
    }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"/>
                }
                {tuit.stats && tuit.stats.likes}
    </span>
            <a href="/" className="wd-icon-link"><i className="fa fa-upload" aria-hidden="true"/></a>
    </div>
);
}
export default TuitStats;

