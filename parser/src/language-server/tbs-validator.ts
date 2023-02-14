import { ValidationAcceptor, ValidationChecks } from 'langium';
import { TbsAstType, Person } from './generated/ast';
import type { TbsServices } from './tbs-module';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: TbsServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.TbsValidator;
    const checks: ValidationChecks<TbsAstType> = {
        Person: validator.checkPersonStartsWithCapital
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class TbsValidator {

    checkPersonStartsWithCapital(person: Person, accept: ValidationAcceptor): void {
        if (person.name) {
            const firstChar = person.name.substring(0, 1);
            if (firstChar.toUpperCase() !== firstChar) {
                accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
            }
        }
    }

}
