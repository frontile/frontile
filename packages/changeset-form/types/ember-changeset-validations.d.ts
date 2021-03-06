declare module 'ember-changeset-validations' {
  import {
    ValidationResult,
    ValidatorMapFunc,
    ValidatorAction
  } from 'ember-changeset/types';

  interface ValidatorMap {
    [s: string]: ValidatorMapFunc | ValidatorMapFunc[] | ValidatorAction;
  }

  export default function lookupValidator(
    validationMap: ValidatorMap
  ): (params: {
    key: string;
    newValue: unknown;
    oldValue: unknown;
    changes: { [s: string]: unknown };
    content: { [s: string]: unknown };
  }) => string | boolean | [boolean] | string[] | Promise<ValidationResult>;
}

declare module 'ember-changeset-validations/validators/presence' {
  import { ValidatorAction } from 'ember-changeset/types';
  export default function validatePresence(
    options?:
      | boolean
      | {
          presence?: boolean;
          ignoreBlank?: boolean;
        }
  ): ValidatorAction;
}
declare module 'ember-changeset-validations/validators/format' {
  import { ValidatorAction } from 'ember-changeset/types';
  export default function validateFormat(options?: {
    allowBlank?: boolean;
    type?: string;
    inverse?: string;
    regex?: RegExp | string;
    allowNonTld?: boolean;
    minTldLength?: number;
  }): ValidatorAction;
}
