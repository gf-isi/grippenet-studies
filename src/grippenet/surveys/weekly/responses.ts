import { responses as common_responses } from "../../../common"

import { check_encoding_collection } from "../../../common"
const common = common_responses.weekly;

const ResponseEncoding = {
    ...common,
    visit_medical : {
        'other_community': '6',
        'gynecologist': '9',
        'midwife': '10',
        'pharmacist':'7',
        'scholar': '8',
       
        ...common.visit_medical
    } as const
} as const;

check_encoding_collection(ResponseEncoding);

export default ResponseEncoding;