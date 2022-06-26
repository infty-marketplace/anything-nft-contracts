# 1. 准备工作

要想在自己本地电脑上部署并测试InftyNft, 首先要在docker创建一个conflux节点，具体步骤如下:

1. 拉取镜像:

   ```shell
   docker pull confluxchain/conflux-rust
   ```

   

2. 启动节点:

   ```shell
   docker run -p 12537:12537 --name cfx-node confluxchain/conflux-rust
   ```

   



# 2. 本地部署+交互

1. 确保docker的容器节点运作

2. 在nft目录使用如下命令本地部署， 运行成功后, build/contracts目录下会生成一些json文件

   ```shell
   npx cfxtruffle deploy
   ```

3. 与合约交互:

   1. 使用如下命令打开cfxtruffle console:

      ```shell
      npx cfxtruffle console
      ```

   2. 在console里获取部署的合约地址及其他操作示例:

      ```shell
      $ cfxtruffle console
      cfxtruffle(development)> .help  # 查看帮助
      cfxtruffle(development)> Object.keys(global) # 查看console环境，可用的全局对象: accounts, cfx, cfxutil, Coin, Migrations
      # 实例一个 Coin 合约, 调用合约对象的 deployed() 方法
      cfxtruffle(development)> let coin = await Coin.deployed()
      # 查看合约的 owner 是谁
      cfxtruffle(development)> let owner = await coin.owner()
      cfxtruffle(development)> owner
      '0x1357DA1577f40EE27aE8870C7f582bD345C65A1c'
      # 查看所有可用 account
      cfxtruffle(development)> accounts
      [
        '0x1357DA1577f40EE27aE8870C7f582bD345C65A1c',
        '0x148A9696F8DCf4d6cB01eC80F1047a3476bA5C56',
        '0x1f69a930B6A4F2BC5Ac03B79A88af9f6bBa0d137'
      ]
      # 查询余额
      cfxtruffle(development)> let balance = await coin.balances('0x1357DA1577f40EE27aE8870C7f582bD345C65A1c')
      cfxtruffle(development)> balance.toString()
      # 铸造新币
      cfxtruffle(development)> await coin.mint('0x1357DA1577f40EE27aE8870C7f582bD345C65A1c', 10000)
      cfxtruffle(development)> balance = await coin.balances('0x1357DA1577f40EE27aE8870C7f582bD345C65A1c')
      cfxtruffle(development)> balance.toString()
      '10000'
      ```

# 3. 本地测试

1. 确保docker的容器节点在运行中

2. 仿照test文件目录下的InftyNft.test.js的template创建test file

3. 在nft目录使用如下命令运行你写的tests:

   ```shell
   npx cfxtruffle test
   ```




# 4. 部署到testnet上

1. 从github下载安装ConfluxStudio(这里使用了Conflux Studio版本[Conflux Studio v0.18.2](https://github.com/ObsidianLabs/ConfluxStudio/releases/tag/0.18.2))
2. 启动Conflux Studio后，install Conflux Node in Docker(1.1.4), Conflux truffle in Docker(1.0.2)
3. 切换到Conflux Testnet, 导入私钥
4. create new Project > Template选择OpenZeppelin - Basics - ERC20, ERC721 & ERC 1155(v3.1+), Framework选 Dockerized Conflux truffle, 点击new就好
5. 将template里的其他合约删掉, 将repo的那个InftyNft.sol复制到项目contracts文件夹下, 点击build和deploy即可