// libs
import { ConfigService } from '@nglibs/config';

// app
import { ANALYTICS_PROVIDERS } from '../../../analytics/index';

// module
import {
  WindowService,
  ConsoleService,
  LogService,
  RouterExtensions,
  AppService
} from '../../index';

// mocks
import { WindowMock } from '../mocks/window.mock';
import { RouterExtensionsMock } from '../mocks/router-extensions.mock';
import { ConfigMock } from '../mocks/ng2-config.mock';

export function TEST_CORE_PROVIDERS(options?: any): any[] {
  // options:
  // window:   = custom window mock (mainly for changing out language)

  let providers = [
    { provide: ConsoleService, useValue: console },
    { provide: WindowService, useClass: (options && options.window) || WindowMock },
    LogService,
    { provide: ConfigService, useClass: (options && options.config) || ConfigMock },
    ANALYTICS_PROVIDERS,
    { provide: RouterExtensions, useClass: RouterExtensionsMock },
    AppService,
  ];

  return providers;
}
