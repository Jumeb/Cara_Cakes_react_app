import React from 'react'

import {BakersCard} from '../../Components';

const Baker = () => {
    return (
        <section class="sec-description" id="stry">
    <div class="txt-cnt margin-top-medium-ve margin-bottom-medium">
        <h2 class="title-lil-1">
            Our team of expert bakers
        </h2>
    </div>
    <div class="row margin-bottom-medium margin-top-huge">
        <% for (baker of bakers) { %>
        <div class="col-1-4">
            <div class="info txt-cnt">
                <h3 class="title-lil-3">The Founder</h3>
                <p class="para txt-cnt">
                    <%= baker.about %>
                </p>
                <div class="info__pic">
                    <div class="info__pic--round">
                        <img src="/<%= baker.image %>" alt="Founder" class="info__img">
                    </div>
                    <a href="/pastries/<%= baker.name %>?genre=Birthday-cake"
                        class="info__name txt-lt"><%= baker.user_name %></a>
                </div>
            </div>
        </div>
        <% } %>
    </div>
</section>
    )
}