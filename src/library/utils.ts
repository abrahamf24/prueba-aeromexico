/**
 * Obtiene las clases que se asociarán a un componente a partir de ciertas condiciones
 * 
 * @param conditions           Es un objeto con la estructura {classToApply: conditionForApply, ...}
 * @param additionalClasses    Clases adicionales a agregar al final
 * @returns                     Las clases separadas por espacio que cumplen con las condiciones para aplicar    
 */
export const getAllowedClasses = (conditions: {[key: string]: boolean}, additionalClasses?: string):string => {
    const trueConditions = Object.keys(conditions).filter(className => conditions[className])
    const classList = trueConditions.map(className => className)

    if(additionalClasses) classList.push(additionalClasses)
    
    return classList.join(' ')
}