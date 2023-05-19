import React from 'react'
import Featurebox  from './Featurebox'
import feature_1 from '../../images/feature_1.jpg'
import feature_2 from '../../images/feature_2.jpg'
import feature_3 from '../../images/feature_3.jpg'
function Feature() {
  return (
    <div id="features">
        <div className="a-container">
             <Featurebox image={feature_1} title="Abuja" description="London Heathrow 10 Sep 2023 - 15 Sep 2023"/>
             <Featurebox image={feature_2} title="Lagos" description="Rome 10 May 2023 - 15 May 2023"/>
             <Featurebox image={feature_3} title="Kaduna" description="Cluj-Napoca 18 Jul 2023 - 30 Jul 2023"/>
        </div>
    </div>
  )
}

export default Feature