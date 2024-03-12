/*
 * Public API Surface of validacao-brasil
 */

export * from './lib/validacao-brasil.module';

export * from './lib/validators/validacao.brasil';

export * from './lib/diretivas/cpf/cpf.directive';
export * from './lib/diretivas/cnpj/cnpj.directive';
export * from './lib/diretivas/cep/cep.directive';
export * from './lib/diretivas/telefone/telefone.directive';
export * from './lib/diretivas/celular/celular.directive';
export * from './lib/diretivas/data/data.directive';
export * from './lib/diretivas/titulo-eleitor/titulo-eleitor.directive';

export * from './lib/diretivas/so-letras-com-espaco/so-letras-com-espaco.directive';
export * from './lib/diretivas/so-letras-sem-espaco/so-letras-sem-espaco.directive';
export * from './lib/diretivas/so-numero-com-espaco/so-numero-com-espaco.directive';
export * from './lib/diretivas/so-numero-sem-espaco/so-numero-sem-espaco.directive';


export * from './lib/pipes/cpf/cpf.pipe';
export * from './lib/pipes/cnpj/cnpj.pipe';
export * from './lib/pipes/cep/cep.pipe';
export * from './lib/pipes/telefone/telefone.pipe';
export * from './lib/pipes/celular/celular.pipe';
