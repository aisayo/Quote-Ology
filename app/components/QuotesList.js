import React from 'react'
import { View } from 'react-native'
import Quotes from './screens/Quotes';

const QuotesList = (props) => {  

    return (
      <View>
        {props.renderQuotes}
      </View>
      
    )
}

export default QuotesList;