import React from 'react';

const BakersCard = (props) => {
    const {baker} = props;
    return (
        <div class="col-1-4">
            <div class="info txt-cnt">
                <h3 class="title-lil-3">The Founder</h3>
                <p class="para txt-cnt">
                    {baker.about} 
                </p>
                <div class="info__pic">
                    <div class="info__pic--round">
                        <img src="{baker.image}" alt="Founder" class="info__img" />
                    </div>
                    <a href="/pastries/<%= baker.name %>?genre=Birthday-cake"
                        class="info__name txt-lt">{baker.user_name}</a>
                </div>
            </div>
        </div>
    )
}

export default BakersCard;
