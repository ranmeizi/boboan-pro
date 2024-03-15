import {
    ShowOtherValue,
    ShowValue,
    SchemaComponent
} from '../'
import { withDebug } from '../fields/withDebug'

console.log('1122')
const DEBUG_ShowValue = withDebug(ShowValue)
const DEBUG_ShowOtherValue=withDebug(ShowOtherValue)

export {
    DEBUG_ShowValue as ShowValue,
    DEBUG_ShowOtherValue as ShowOtherValue
}