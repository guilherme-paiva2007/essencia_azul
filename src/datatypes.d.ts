class Acolhido {
    private id: number
    nome: string
    idade: number
    email: string
    telefone: string[]
    nome_responsaveis: string[]
    private id_familia: number
    familia: Familia
    nivel_suporte: 1 | 2 | 3
    escola: {
        nome: string,
        tem_suporte: boolean
    } | false
    identificacao: {
        cordao: boolean,
        ciptea: boolean,
        vaga_exclusiva: boolean
    }
    interesses: string[]
    hiperfoco: string[]
    como_acalma: string
    atividades_nao_gosta: string[]
    restricoes_alimentares: string[]
    comida_favorita: string
    convenio: string | false
    terapias: string[]
    terapias_precisa: string[]

    observacoes: string
    private ids_documentos: number[]

    get documentos(): Documento[]
}

private class Residente {
    private id: number
    private id_familia: number
    nome: string
    estado: "neurotipico" | "autista" | "investigacao"
}

class Familia {
    private id: number
    sobrenome: string
    endereco: string

    get total_residentes(): (Acolhido | Residente)[] // Todos os residentes, incluindo acolhidos
    
    get acolhidos(): Acolhido[] // Somente acolhidos
    get outros_residentes(): Residente[] // Outros residentes não acolhidos
    get outros_residentes_autistas(): Residente[] // Somente residentes não acolhidos autistas
    get outros_residentes_investigacao(): Residente[] // Somente residentes não acolhidos em investigação

    observacoes: string
}

class Documento {
    private id: number
    private id_acolhido: number
    get acolhido(): Acolhido

    arquivo: Blob
}

class Admin {
    private id: number
    nome: string
    email: string
    senha: string
}