/**
 * @flow
 * @relayHash f65fabf2003f741be74fde7a8d9fffc5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditProfileMutationVariables = {|
  uuid?: ?string,
  name?: ?string,
  grad_year?: ?string,
  school?: ?string,
  skills?: ?$ReadOnlyArray<?string>,
  experience?: ?string,
  contact?: ?string,
  contact_method?: ?string,
|};
export type EditProfileMutationResponse = {|
  +update_user: {|
    +name: ?string,
    +grad_year: ?string,
    +school: ?string,
    +skills: ?$ReadOnlyArray<?string>,
    +experience: ?string,
    +contact: ?string,
  |}
|};
export type EditProfileMutation = {|
  variables: EditProfileMutationVariables,
  response: EditProfileMutationResponse,
|};
*/


/*
mutation EditProfileMutation(
  $uuid: String
  $name: String
  $grad_year: String
  $school: String
  $skills: [String]
  $experience: String
  $contact: String
  $contact_method: String
) {
  update_user(uuid: $uuid, name: $name, grad_year: $grad_year, school: $school, skills: $skills, experience: $experience, contact: $contact, contact_method: $contact_method) {
    name
    grad_year
    school
    skills
    experience
    contact
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "uuid",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "grad_year",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "school",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "skills",
    "type": "[String]",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "experience",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "contact",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "contact_method",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "contact",
    "variableName": "contact",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "contact_method",
    "variableName": "contact_method",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "experience",
    "variableName": "experience",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "grad_year",
    "variableName": "grad_year",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "school",
    "variableName": "school",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "skills",
    "variableName": "skills",
    "type": "[String]"
  },
  {
    "kind": "Variable",
    "name": "uuid",
    "variableName": "uuid",
    "type": "String"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "grad_year",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "school",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "skills",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "experience",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "contact",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EditProfileMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "update_user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditProfileMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "update_user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditProfileMutation",
    "id": null,
    "text": "mutation EditProfileMutation(\n  $uuid: String\n  $name: String\n  $grad_year: String\n  $school: String\n  $skills: [String]\n  $experience: String\n  $contact: String\n  $contact_method: String\n) {\n  update_user(uuid: $uuid, name: $name, grad_year: $grad_year, school: $school, skills: $skills, experience: $experience, contact: $contact, contact_method: $contact_method) {\n    name\n    grad_year\n    school\n    skills\n    experience\n    contact\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '10d33ffc6ac92388df51e030ac058a64';
module.exports = node;
