import { Controller, Get, Param } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountResponse } from './interfaces/accont.interface';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('data/:username/:tag')
  async getAccountData(@Param('username') username: string, @Param('tag') tag: string): Promise<AccountResponse> {
    const accountData = await this.accountService.getAccountData(username, tag).toPromise();
    return accountData;
  }
}
