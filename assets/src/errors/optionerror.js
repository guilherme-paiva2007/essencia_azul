import Property from "../property.js";

/**
 * Erro de seleção de opções.
 */
class OptionError extends Error {
    constructor(message, options = undefined) {
        typeof options == "object" ? super(message, options) : super(message);
    }

    static {
        const prototype = this.prototype;
        prototype.name = "OptionError";
        Property.set(prototype, 'name', "hide", "freeze", "lock");
    }
}

export default OptionError;