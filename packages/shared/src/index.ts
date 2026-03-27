// Shared utilities and platform-agnostic functions

export const debounce = <T extends (...args: any[]) => any>(
    func: T,
    wait: number
): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

export const throttle = <T extends (...args: any[]) => any>(
    func: T,
    limit: number
): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

export const isObject = (value: any): value is object => {
    return value !== null && typeof value === 'object';
};

export const deepMerge = <T extends object>(...objects: T[]): T => {
    return objects.reduce((result, obj) => {
        Object.keys(obj).forEach(key => {
            const resultValue = (result as any)[key];
            const objValue = (obj as any)[key];
            if (isObject(resultValue) && isObject(objValue)) {
                (result as any)[key] = deepMerge(resultValue, objValue);
            } else {
                (result as any)[key] = objValue;
            }
        });
        return result;
    }, {} as T);
};

export const generateId = (): string => {
    return Math.random().toString(36).substr(2, 9);
};

export const formatDate = (date: Date, format: string): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return format
        .replace('YYYY', String(year))
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);
};

export const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validatePhone = (phone: string): boolean => {
    const regex = /^1[3-9]\d{9}$/;
    return regex.test(phone);
};

export const camelCaseToKebabCase = (str: string): string => {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

export const kebabCaseToCamelCase = (str: string): string => {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};