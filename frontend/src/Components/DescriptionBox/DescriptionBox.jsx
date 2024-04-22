import React from "react";
import "./DescriptionBox.scss";

export const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Review (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus quis cum, commodi temporibus facere adipisci
                    excepturi consequuntur quod eum at tenetur accusantium rem
                    perspiciatis voluptatem! Laudantium saepe pariatur earum
                    quae animi porro. Consequuntur praesentium, ullam obcaecati,
                    ratione suscipit sit porro asperiores ab voluptatum aut
                    aperiam quidem aliquam labore amet delectus.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione tempora ad, reiciendis qui, cupiditate animi
                    explicabo corporis praesentium eos ea repellat natus unde,
                    sit rerum.
                </p>
            </div>
        </div>
    );
};
