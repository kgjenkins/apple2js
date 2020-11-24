import { bytify } from '../util';

const apple2j_charset = bytify([
    0xff,0xef,0xe1,0xed,0xd5,0xfb,0xf7,0xef,
    0xff,0xfb,0xc7,0xf7,0xc1,0xf7,0xf7,0xef,
    0xff,0xff,0xd5,0xd5,0xfd,0xfd,0xfb,0xf7,
    0xff,0xff,0xe3,0xff,0xc1,0xf7,0xf7,0xef,
    0xff,0xef,0xef,0xef,0xe7,0xeb,0xef,0xef,
    0xff,0xf7,0xf7,0xc1,0xf7,0xf7,0xf7,0xef,
    0xff,0xff,0xe3,0xff,0xff,0xff,0xff,0xc1,
    0xff,0xff,0xc1,0xfd,0xeb,0xf7,0xeb,0xdf,
    0xff,0xf7,0xc1,0xfb,0xf3,0xe5,0xd7,0xf7,
    0xff,0xff,0xfd,0xfd,0xfb,0xf7,0xef,0xdf,
    0xff,0xff,0xff,0xeb,0xed,0xed,0xed,0xdd,
    0xff,0xff,0xdf,0xdf,0xc1,0xdf,0xdf,0xc1,
    0xff,0xff,0xc1,0xfd,0xfd,0xfb,0xf7,0xef,
    0xff,0xff,0xff,0xef,0xd7,0xfb,0xfd,0xff,
    0xff,0xf7,0xf7,0xc1,0xf7,0xd5,0xd5,0xf7,
    0xff,0xff,0xc1,0xfd,0xfd,0xeb,0xf7,0xfb,
    0xff,0xef,0xf1,0xff,0xf1,0xff,0xef,0xf1,
    0xff,0xff,0xfb,0xf7,0xef,0xdd,0xc1,0xfd,
    0xff,0xff,0xfd,0xfd,0xeb,0xf7,0xeb,0xdf,
    0xff,0xff,0xc3,0xef,0xc1,0xef,0xef,0xe1,
    0xff,0xef,0xef,0xc1,0xed,0xeb,0xef,0xef,
    0xff,0xff,0xe3,0xfb,0xfb,0xfb,0xfb,0xc1,
    0xff,0xff,0xc1,0xfd,0xe1,0xfd,0xfd,0xc1,
    0xff,0xff,0xe3,0xff,0xc1,0xfd,0xfd,0xf3,
    0xff,0xff,0xed,0xed,0xed,0xfd,0xfd,0xfb,
    0xff,0xff,0xd7,0xd7,0xd7,0xd5,0xd5,0xd3,
    0xff,0xff,0xdf,0xdf,0xdd,0xdb,0xd7,0xcf,
    0xff,0xff,0xc1,0xdd,0xdd,0xdd,0xdd,0xc1,
    0xff,0xff,0xc1,0xdd,0xdd,0xfd,0xfb,0xf7,
    0xff,0xff,0xcf,0xfd,0xfd,0xfb,0xf7,0xcf,
    0xff,0xd7,0xd7,0xff,0xff,0xff,0xff,0xff,
    0xff,0xef,0xd7,0xef,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xef,0xd7,0xef,
    0xff,0xe1,0xef,0xef,0xef,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xfb,0xfb,0xfb,0xc3,
    0xff,0xff,0xff,0xff,0xff,0xef,0xef,0xdf,
    0xff,0xff,0xff,0xff,0xf7,0xff,0xff,0xff,
    0xff,0xff,0xc1,0xfd,0xc1,0xfd,0xfb,0xf7,
    0xff,0xff,0xff,0xe1,0xfd,0xf3,0xf7,0xef,
    0xff,0xff,0xff,0xfb,0xf7,0xe7,0xd7,0xf7,
    0xff,0xff,0xc1,0xdd,0xdd,0xdd,0xdd,0xc1,
    0xff,0xff,0xc1,0xdd,0xdd,0xfd,0xfb,0xf7,
    0xff,0xff,0xef,0xd7,0xef,0xff,0xff,0xff,
    0xff,0xff,0xff,0xef,0xc1,0xed,0xeb,0xef,
    0xff,0xff,0xff,0xff,0xe3,0xfb,0xfb,0xc1,
    0xff,0xff,0xff,0xe1,0xfd,0xe1,0xfd,0xe1,
    0xff,0xff,0xff,0xff,0xd5,0xd5,0xfd,0xf3,
    0xff,0xff,0xff,0xff,0xc1,0xff,0xff,0xff,
    0xff,0xff,0xc1,0xfd,0xf3,0xf7,0xf7,0xef,
    0xff,0xfb,0xf7,0xe7,0xd7,0xf7,0xf7,0xf7,
    0xff,0xf7,0xc1,0xdd,0xfd,0xfb,0xf7,0xef,
    0xff,0xff,0xc1,0xf7,0xf7,0xf7,0xf7,0xc1,
    0xff,0xfb,0xc1,0xfb,0xf3,0xeb,0xdb,0xfb,
    0xff,0xf7,0xf7,0xc1,0xf5,0xf5,0xed,0xdb,
    0xff,0xf7,0xc1,0xf7,0xc1,0xf7,0xf7,0xf7,
    0xff,0xff,0xe1,0xed,0xdd,0xfb,0xf7,0xef,
    0xff,0xef,0xef,0xe1,0xdb,0xfb,0xfb,0xf7,
    0xff,0xff,0xc1,0xfd,0xfd,0xfd,0xfd,0xc1,
    0xff,0xff,0xeb,0xc1,0xeb,0xeb,0xfb,0xf7,
    0xff,0xff,0xcf,0xff,0xcd,0xfd,0xfb,0xc7,
    0xff,0xff,0xc1,0xfd,0xfb,0xf7,0xeb,0xdd,
    0xff,0xff,0xef,0xc1,0xed,0xeb,0xef,0xe1,
    0xff,0xff,0xdd,0xed,0xfd,0xfd,0xfb,0xf7,
    0x00,0x1c,0x22,0x2a,0x2e,0x2c,0x20,0x1e,
    0x00,0x08,0x14,0x22,0x22,0x3e,0x22,0x22,
    0x00,0x3c,0x22,0x22,0x3c,0x22,0x22,0x3c,
    0x00,0x1c,0x22,0x20,0x20,0x20,0x22,0x1c,
    0x00,0x3c,0x22,0x22,0x22,0x22,0x22,0x3c,
    0x00,0x3e,0x20,0x20,0x3c,0x20,0x20,0x3e,
    0x00,0x3e,0x20,0x20,0x3c,0x20,0x20,0x20,
    0x00,0x1e,0x20,0x20,0x20,0x26,0x22,0x1e,
    0x00,0x22,0x22,0x22,0x3e,0x22,0x22,0x22,
    0x00,0x1c,0x08,0x08,0x08,0x08,0x08,0x1c,
    0x00,0x02,0x02,0x02,0x02,0x02,0x22,0x1c,
    0x00,0x22,0x24,0x28,0x30,0x28,0x24,0x22,
    0x00,0x20,0x20,0x20,0x20,0x20,0x20,0x3e,
    0x00,0x22,0x36,0x2a,0x2a,0x22,0x22,0x22,
    0x00,0x22,0x22,0x32,0x2a,0x26,0x22,0x22,
    0x00,0x1c,0x22,0x22,0x22,0x22,0x22,0x1c,
    0x00,0x3c,0x22,0x22,0x3c,0x20,0x20,0x20,
    0x00,0x1c,0x22,0x22,0x22,0x2a,0x24,0x1a,
    0x00,0x3c,0x22,0x22,0x3c,0x28,0x24,0x22,
    0x00,0x1c,0x22,0x20,0x1c,0x02,0x22,0x1c,
    0x00,0x3e,0x08,0x08,0x08,0x08,0x08,0x08,
    0x00,0x22,0x22,0x22,0x22,0x22,0x22,0x1c,
    0x00,0x22,0x22,0x22,0x22,0x22,0x14,0x08,
    0x00,0x22,0x22,0x22,0x2a,0x2a,0x36,0x22,
    0x00,0x22,0x22,0x14,0x08,0x14,0x22,0x22,
    0x00,0x22,0x22,0x14,0x08,0x08,0x08,0x08,
    0x00,0x3e,0x02,0x04,0x08,0x10,0x20,0x3e,
    0x00,0x3e,0x30,0x30,0x30,0x30,0x30,0x3e,
    0x00,0x00,0x20,0x10,0x08,0x04,0x02,0x00,
    0x00,0x3e,0x06,0x06,0x06,0x06,0x06,0x3e,
    0x00,0x00,0x00,0x08,0x14,0x22,0x00,0x00,
    0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x3e,
    0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
    0x00,0x08,0x08,0x08,0x08,0x08,0x00,0x08,
    0x00,0x14,0x14,0x14,0x00,0x00,0x00,0x00,
    0x00,0x14,0x14,0x3e,0x14,0x3e,0x14,0x14,
    0x00,0x08,0x1e,0x28,0x1c,0x0a,0x3c,0x08,
    0x00,0x30,0x32,0x04,0x08,0x10,0x26,0x06,
    0x00,0x10,0x28,0x28,0x10,0x2a,0x24,0x1a,
    0x00,0x08,0x08,0x08,0x00,0x00,0x00,0x00,
    0x00,0x08,0x10,0x20,0x20,0x20,0x10,0x08,
    0x00,0x08,0x04,0x02,0x02,0x02,0x04,0x08,
    0x00,0x08,0x2a,0x1c,0x08,0x1c,0x2a,0x08,
    0x00,0x00,0x08,0x08,0x3e,0x08,0x08,0x00,
    0x00,0x00,0x00,0x00,0x00,0x08,0x08,0x10,
    0x00,0x00,0x00,0x00,0x3e,0x00,0x00,0x00,
    0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x08,
    0x00,0x00,0x02,0x04,0x08,0x10,0x20,0x00,
    0x00,0x1c,0x22,0x26,0x2a,0x32,0x22,0x1c,
    0x00,0x08,0x18,0x08,0x08,0x08,0x08,0x1c,
    0x00,0x1c,0x22,0x02,0x0c,0x10,0x20,0x3e,
    0x00,0x3e,0x02,0x04,0x0c,0x02,0x22,0x1c,
    0x00,0x04,0x0c,0x14,0x24,0x3e,0x04,0x04,
    0x00,0x3e,0x20,0x3c,0x02,0x02,0x22,0x1c,
    0x00,0x0e,0x10,0x20,0x3c,0x22,0x22,0x1c,
    0x00,0x3e,0x02,0x04,0x08,0x10,0x10,0x10,
    0x00,0x1c,0x22,0x22,0x1c,0x22,0x22,0x1c,
    0x00,0x1c,0x22,0x22,0x1e,0x02,0x04,0x38,
    0x00,0x00,0x00,0x08,0x00,0x08,0x00,0x00,
    0x00,0x00,0x00,0x08,0x00,0x08,0x08,0x10,
    0x00,0x04,0x08,0x10,0x20,0x10,0x08,0x04,
    0x00,0x00,0x00,0x3e,0x00,0x3e,0x00,0x00,
    0x00,0x10,0x08,0x04,0x02,0x04,0x08,0x10,
    0x00,0x1c,0x22,0x04,0x08,0x08,0x00,0x08,
    0x00,0x1c,0x22,0x2a,0x2e,0x2c,0x20,0x1e,
    0x00,0x08,0x14,0x22,0x22,0x3e,0x22,0x22,
    0x00,0x3c,0x22,0x22,0x3c,0x22,0x22,0x3c,
    0x00,0x1c,0x22,0x20,0x20,0x20,0x22,0x1c,
    0x00,0x3c,0x22,0x22,0x22,0x22,0x22,0x3c,
    0x00,0x3e,0x20,0x20,0x3c,0x20,0x20,0x3e,
    0x00,0x3e,0x20,0x20,0x3c,0x20,0x20,0x20,
    0x00,0x1e,0x20,0x20,0x20,0x26,0x22,0x1e,
    0x00,0x22,0x22,0x22,0x3e,0x22,0x22,0x22,
    0x00,0x1c,0x08,0x08,0x08,0x08,0x08,0x1c,
    0x00,0x02,0x02,0x02,0x02,0x02,0x22,0x1c,
    0x00,0x22,0x24,0x28,0x30,0x28,0x24,0x22,
    0x00,0x20,0x20,0x20,0x20,0x20,0x20,0x3e,
    0x00,0x22,0x36,0x2a,0x2a,0x22,0x22,0x22,
    0x00,0x22,0x22,0x32,0x2a,0x26,0x22,0x22,
    0x00,0x1c,0x22,0x22,0x22,0x22,0x22,0x1c,
    0x00,0x3c,0x22,0x22,0x3c,0x20,0x20,0x20,
    0x00,0x1c,0x22,0x22,0x22,0x2a,0x24,0x1a,
    0x00,0x3c,0x22,0x22,0x3c,0x28,0x24,0x22,
    0x00,0x1c,0x22,0x20,0x1c,0x02,0x22,0x1c,
    0x00,0x3e,0x08,0x08,0x08,0x08,0x08,0x08,
    0x00,0x22,0x22,0x22,0x22,0x22,0x22,0x1c,
    0x00,0x22,0x22,0x22,0x22,0x22,0x14,0x08,
    0x00,0x22,0x22,0x22,0x2a,0x2a,0x36,0x22,
    0x00,0x22,0x22,0x14,0x08,0x14,0x22,0x22,
    0x00,0x22,0x22,0x14,0x08,0x08,0x08,0x08,
    0x00,0x3e,0x02,0x04,0x08,0x10,0x20,0x3e,
    0x00,0x3e,0x30,0x30,0x30,0x30,0x30,0x3e,
    0x00,0x00,0x20,0x10,0x08,0x04,0x02,0x00,
    0x00,0x3e,0x06,0x06,0x06,0x06,0x06,0x3e,
    0x00,0x00,0x00,0x08,0x14,0x22,0x00,0x00,
    0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x3e,
    0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
    0x00,0x08,0x08,0x08,0x08,0x08,0x00,0x08,
    0x00,0x14,0x14,0x14,0x00,0x00,0x00,0x00,
    0x00,0x14,0x14,0x3e,0x14,0x3e,0x14,0x14,
    0x00,0x08,0x1e,0x28,0x1c,0x0a,0x3c,0x08,
    0x00,0x30,0x32,0x04,0x08,0x10,0x26,0x06,
    0x00,0x10,0x28,0x28,0x10,0x2a,0x24,0x1a,
    0x00,0x08,0x08,0x08,0x00,0x00,0x00,0x00,
    0x00,0x08,0x10,0x20,0x20,0x20,0x10,0x08,
    0x00,0x08,0x04,0x02,0x02,0x02,0x04,0x08,
    0x00,0x08,0x2a,0x1c,0x08,0x1c,0x2a,0x08,
    0x00,0x00,0x08,0x08,0x3e,0x08,0x08,0x00,
    0x00,0x00,0x00,0x00,0x00,0x08,0x08,0x10,
    0x00,0x00,0x00,0x00,0x3e,0x00,0x00,0x00,
    0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x08,
    0x00,0x00,0x02,0x04,0x08,0x10,0x20,0x00,
    0x00,0x1c,0x22,0x26,0x2a,0x32,0x22,0x1c,
    0x00,0x08,0x18,0x08,0x08,0x08,0x08,0x1c,
    0x00,0x1c,0x22,0x02,0x0c,0x10,0x20,0x3e,
    0x00,0x3e,0x02,0x04,0x0c,0x02,0x22,0x1c,
    0x00,0x04,0x0c,0x14,0x24,0x3e,0x04,0x04,
    0x00,0x3e,0x20,0x3c,0x02,0x02,0x22,0x1c,
    0x00,0x0e,0x10,0x20,0x3c,0x22,0x22,0x1c,
    0x00,0x3e,0x02,0x04,0x08,0x10,0x10,0x10,
    0x00,0x1c,0x22,0x22,0x1c,0x22,0x22,0x1c,
    0x00,0x1c,0x22,0x22,0x1e,0x02,0x04,0x38,
    0x00,0x00,0x00,0x08,0x00,0x08,0x00,0x00,
    0x00,0x00,0x00,0x08,0x00,0x08,0x08,0x10,
    0x00,0x04,0x08,0x10,0x20,0x10,0x08,0x04,
    0x00,0x00,0x00,0x3e,0x00,0x3e,0x00,0x00,
    0x00,0x10,0x08,0x04,0x02,0x04,0x08,0x10,
    0x00,0x1c,0x22,0x04,0x08,0x08,0x00,0x08,
    0x00,0x1c,0x22,0x2a,0x2e,0x2c,0x20,0x1e,
    0x00,0x08,0x14,0x22,0x22,0x3e,0x22,0x22,
    0x00,0x3c,0x22,0x22,0x3c,0x22,0x22,0x3c,
    0x00,0x1c,0x22,0x20,0x20,0x20,0x22,0x1c,
    0x00,0x3c,0x22,0x22,0x22,0x22,0x22,0x3c,
    0x00,0x3e,0x20,0x20,0x3c,0x20,0x20,0x3e,
    0x00,0x3e,0x20,0x20,0x3c,0x20,0x20,0x20,
    0x00,0x1e,0x20,0x20,0x20,0x26,0x22,0x1e,
    0x00,0x22,0x22,0x22,0x3e,0x22,0x22,0x22,
    0x00,0x1c,0x08,0x08,0x08,0x08,0x08,0x1c,
    0x00,0x02,0x02,0x02,0x02,0x02,0x22,0x1c,
    0x00,0x22,0x24,0x28,0x30,0x28,0x24,0x22,
    0x00,0x20,0x20,0x20,0x20,0x20,0x20,0x3e,
    0x00,0x22,0x36,0x2a,0x2a,0x22,0x22,0x22,
    0x00,0x22,0x22,0x32,0x2a,0x26,0x22,0x22,
    0x00,0x1c,0x22,0x22,0x22,0x22,0x22,0x1c,
    0x00,0x3c,0x22,0x22,0x3c,0x20,0x20,0x20,
    0x00,0x1c,0x22,0x22,0x22,0x2a,0x24,0x1a,
    0x00,0x3c,0x22,0x22,0x3c,0x28,0x24,0x22,
    0x00,0x1c,0x22,0x20,0x1c,0x02,0x22,0x1c,
    0x00,0x3e,0x08,0x08,0x08,0x08,0x08,0x08,
    0x00,0x22,0x22,0x22,0x22,0x22,0x22,0x1c,
    0x00,0x22,0x22,0x22,0x22,0x22,0x14,0x08,
    0x00,0x22,0x22,0x22,0x2a,0x2a,0x36,0x22,
    0x00,0x22,0x22,0x14,0x08,0x14,0x22,0x22,
    0x00,0x22,0x22,0x14,0x08,0x08,0x08,0x08,
    0x00,0x3e,0x02,0x04,0x08,0x10,0x20,0x3e,
    0x00,0x3e,0x30,0x30,0x30,0x30,0x30,0x3e,
    0x00,0x00,0x20,0x10,0x08,0x04,0x02,0x00,
    0x00,0x3e,0x06,0x06,0x06,0x06,0x06,0x3e,
    0x00,0x00,0x00,0x08,0x14,0x22,0x00,0x00,
    0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x3e,
    0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
    0x00,0x08,0x08,0x08,0x08,0x08,0x00,0x08,
    0x00,0x14,0x14,0x14,0x00,0x00,0x00,0x00,
    0x00,0x14,0x14,0x3e,0x14,0x3e,0x14,0x14,
    0x00,0x08,0x1e,0x28,0x1c,0x0a,0x3c,0x08,
    0x00,0x30,0x32,0x04,0x08,0x10,0x26,0x06,
    0x00,0x10,0x28,0x28,0x10,0x2a,0x24,0x1a,
    0x00,0x08,0x08,0x08,0x00,0x00,0x00,0x00,
    0x00,0x08,0x10,0x20,0x20,0x20,0x10,0x08,
    0x00,0x08,0x04,0x02,0x02,0x02,0x04,0x08,
    0x00,0x08,0x2a,0x1c,0x08,0x1c,0x2a,0x08,
    0x00,0x00,0x08,0x08,0x3e,0x08,0x08,0x00,
    0x00,0x00,0x00,0x00,0x00,0x08,0x08,0x10,
    0x00,0x00,0x00,0x00,0x3e,0x00,0x00,0x00,
    0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x08,
    0x00,0x00,0x02,0x04,0x08,0x10,0x20,0x00,
    0x00,0x1c,0x22,0x26,0x2a,0x32,0x22,0x1c,
    0x00,0x08,0x18,0x08,0x08,0x08,0x08,0x1c,
    0x00,0x1c,0x22,0x02,0x0c,0x10,0x20,0x3e,
    0x00,0x3e,0x02,0x04,0x0c,0x02,0x22,0x1c,
    0x00,0x04,0x0c,0x14,0x24,0x3e,0x04,0x04,
    0x00,0x3e,0x20,0x3c,0x02,0x02,0x22,0x1c,
    0x00,0x0e,0x10,0x20,0x3c,0x22,0x22,0x1c,
    0x00,0x3e,0x02,0x04,0x08,0x10,0x10,0x10,
    0x00,0x1c,0x22,0x22,0x1c,0x22,0x22,0x1c,
    0x00,0x1c,0x22,0x22,0x1e,0x02,0x04,0x38,
    0x00,0x00,0x00,0x08,0x00,0x08,0x00,0x00,
    0x00,0x00,0x00,0x08,0x00,0x08,0x08,0x10,
    0x00,0x04,0x08,0x10,0x20,0x10,0x08,0x04,
    0x00,0x00,0x00,0x3e,0x00,0x3e,0x00,0x00,
    0x00,0x10,0x08,0x04,0x02,0x04,0x08,0x10,
    0x00,0x1c,0x22,0x04,0x08,0x08,0x00,0x08,
]);

export default apple2j_charset;
