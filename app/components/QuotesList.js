import React from 'react'
import { View } from 'react-native'

const QuotesList = (props) => {  

    return (
      <View>
        {props.renderQuotes}
      </View>
    )
}

export default QuotesList;