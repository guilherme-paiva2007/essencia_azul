import Property from "../property.js";

/**
 * Erro de formulação de expressões.
 */
class ExpressionError extends Error {
    constructor(message, options = undefined) {
        typeof options == "object" ? super(message, options) : super(message);
    }

    static {
        const prototype = this.prototype;
        prototype.name = "ExpressionError";
        Property.set(prototype, "name", "hide", "freeze", "lock");
    }
}

export default ExpressionError;