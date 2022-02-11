//=============================================================================
//【ファイル名】
//    apps.ts
//【アプリ名】
//    設定情報
//【タイプ】
//    ○PC用 / ○スマートフォン用 / ●共通用
//-----------------------------------------------------------------------------
//  Copyright (c) 2022 AISIC.Inc
//=============================================================================

export class Apps {

  private _confs: { env: string; code: string; name: string; id: number; token: string; }[];
  private _env: string;

  constructor(id: number) {
    this._confs = [
      {
        env: 'dev',
        code: 'number_ctrl',
        name: '【開発】番号管理マスタ',
        id: 10,
        token: 'BYs5rfJqgOS7jKGj7yHmG4Ob9hN4HMjy4aRlbima'
      },
      {
        env: 'dev',
        code: 'error_log',
        name: '【開発】エラーログ',
        id: 7,
        token: 'Ic5TjV6WbhMluVfFAgG5eYbL5HfoevVJOcpy6j3X'
      },
      {
        env: 'dev',
        code: 'customer',
        name: '【開発】顧客リスト',
        id: 1,
        token: 'Lu2XevvEFAWRfSKOaaI7hmZcacQv0THXVh8PJx3H'
      },
      {
        env: 'dev',
        code: 'project',
        name: '【開発】案件管理',
        id: 2,
        token: 'Xayrvxc8Kv805ZY6g2yETvssN4l7w3k7s1OxW64Q'
      },
      {
        env: 'dev',
        code: 'daily_report',
        name: '【開発】日報',
        id: 3,
        token: 'w7fapwYLq10jL67TiulAV7TMzhpjBowgMFwOeMf8'
      },
      {
        env: 'dev',
        code: 'files_management',
        name: '【開発】ファイル管理',
        id: 4,
        token: 'y2tHpOU6Gao11R6OlqzkhmVpHEHw8gLkCO50xS5u'
      },
      {
        env: 'dev',
        code: 'contract_management',
        name: '【開発】契約書管理',
        id: 5,
        token: 'r7QsN5Fjc4jREwJSsvoLaLyZv5sxHRnY0amj2gpc	'
      }
    ];

    this._env = this.getEnvById(id);

  }

  // =============================================
  // getter / setter
  // =============================================
  public get env(): string {
    return this._env;
  }

  public get confs(): { env: string; code: string; name: string; id: number; token: string; }[] {
    return this._confs;
  }

  // =============================================
  // Method
  // =============================================
  // ---------------------------------------------
  // getConfById
  // ---------------------------------------------
  public getConfById(id: number): { env: string; code: string; name: string; id: number; token: string; } {
    return this._confs.filter(v => v.id === id)[0];
  }

  // ---------------------------------------------
  // getEnvById
  // ---------------------------------------------
  private getEnvById(id: number): string {
    return this._confs.filter(v => v.id === id)[0].env;
  }

  // ---------------------------------------------
  // getCodeById
  // ---------------------------------------------
  public getCodeById(id: number): string {
    return this._confs.filter(v => v.id === id)[0].code;
  }

  // ---------------------------------------------
  // getTokenById
  // ---------------------------------------------
  public getTokenById(id: number): string {
    return this._confs.filter(v => v.id === id)[0].token;
  }

  // ---------------------------------------------
  // getConfByCode
  // ---------------------------------------------
  public getConfByCode(code: string): { env: string; code: string; name: string; id: number; token: string; } {
    return this._confs.filter(v => (v.env === this._env && v.code === code))[0];
  }

  // ---------------------------------------------
  // getIdByCode
  // ---------------------------------------------
  public getIdByCode(code: string): number {
    return this._confs.filter(v => (v.env === this._env && v.code === code))[0].id;
  }

  // ---------------------------------------------
  // getTokenByCode
  // ---------------------------------------------
  public getTokenByCode(code: string): string {
    return this._confs.filter(v => (v.env === this._env && v.code === code))[0].token;
  }

  // ---------------------------------------------
  // isExistConfById
  // アプリid存在チェック(true：存在する / false：存在しない)
  // ---------------------------------------------
  public isExistConfById(id: number): boolean {
    return this._confs.filter(v => v.id === id).length === 0 ? false : true;
  }
}
