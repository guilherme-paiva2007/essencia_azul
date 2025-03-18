import Property from "../property.js";

/**
 * Erro de contexto de execução.
 */
class ContextError extends Error {
    constructor(message, options = undefined) {
        typeof options == "object" ? super(message, options) : super(message);
    }

    static {
        const prototype = this.prototype;
        prototype.name = "ContextError";
        Property.set(prototype, "name", "hide", "freeze", "lock");
    }
}

export default ContextError;