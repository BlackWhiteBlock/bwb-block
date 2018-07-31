#create wallet
echo -e "\033[33m ===================================================CREATE WALLET============================================ \033[0m"
wallet_password=`cleos wallet create | grep "PW5"`

if [ "$wallet_password" == "" ];then	
  	echo -e "\033[31m Create wallet failed. \033[0m"
      	exit 1
   else
	echo -e "\033[32m wallet created \033[0m"
        echo -e "\033[32m wallet pwd: $wallet_password \033[0m"
fi

#import key
echo -e "\033[33m ===================================================IMPORT KEY============================================ \033[0m"

#eosio
echo -e "\033[32m eosio \033[0m"
var=`cleos wallet import --private-key 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3 | grep "EOS"`
PUB_KEY_EOSIO=${var:0-53}
echo -e "\033[32m public key: $PUB_KEY_EOSIO \033[0m"

#producer1
echo -e "\033[32m producer1 \033[0m"
var=`cleos wallet import --private-key 5KNCYKFzJ1Us2b9pkmteJWyeii4B2sR7Rncd1Pzq2CCB4fkioc7 | grep "EOS"`
PUB_KEY_P1=${var:0-53}
echo -e "\033[32m public key: $PUB_KEY_P1 \033[0m"

#producer2
echo -e "\033[32m producer2 \033[0m"
var=`cleos wallet import --private-key 5JTKXUaVPeJyHf8Ncmu41Wc3orxnCWk9iBCiWKuboLc9EHAVpEM | grep "EOS"`
PUB_KEY_P2=${var:0-53}
echo -e "\033[32m public key: $PUB_KEY_P2 \033[0m"

#producer3
echo -e "\033[32m producer3 \033[0m"
var=`cleos wallet import --private-key 5JuVPq5JicVhk3CLWwSnmjAKbrsLKhcCPGWoCjt1t9vSGbMM6xs | grep "EOS"`
PUB_KEY_P3=${var:0-53}
echo -e "\033[32m public key: $PUB_KEY_P3 \033[0m"

#user1
echo -e "\033[32m user1 \033[0m"
var=`cleos wallet import --private-key 5JGqN3JbyH97AqqN66sLD5MSwDTjMPXDATyMbnPKJA73jfJcZtZ | grep "EOS"`
PUB_KEY_U1=${var:0-53}
echo -e "\033[32m public key: $PUB_KEY_U1 \033[0m"

#user2
echo -e "\033[32m user2 \033[0m"
var=`cleos wallet import --private-key 5JukFyLYg25VUrm4XhwkSzpFysNvqbhpPGhPc9sDwd9aNg4qVFX | grep "EOS"`
PUB_KEY_U2=${var:0-53}
echo -e "\033[32m public key: $PUB_KEY_U2 \033[0m"

#user3
echo -e "\033[32m user3 \033[0m"
var=`cleos wallet import --private-key 5HwARyPf756Le4fZjCBuQT55Hecvf3JqfmqvYrvv3DNHK3MT9pz | grep "EOS"`
PUB_KEY_U3=${var:0-53}
echo -e "\033[32m public key: $PUB_KEY_U3 \033[0m"


#list keys
#cleos wallet list keys

sleep 3s

#create system accounts
echo -e "\033[33m ===================================================CREATE SYSTEM ACCOUNTS============================================ \033[0m"

BIOS_HOST="http://192.168.181.168:8888"

#eosio.bpay 矿工获取出块奖励的临时代管账户，增发EOS的1%的25%会先转到这个账户
cleos --url $BIOS_HOST create account eosio eosio.bpay $PUB_KEY_EOSIO 

#eosio.msig 多重签名管理的账户
cleos --url $BIOS_HOST create account eosio eosio.msig $PUB_KEY_EOSIO 

#eosio.names 靓号账户拍卖管理的账户
cleos --url $BIOS_HOST create account eosio eosio.names $PUB_KEY_EOSIO 

#eosio.ram 内存买卖管理的账户
cleos --url $BIOS_HOST create account eosio eosio.ram $PUB_KEY_EOSIO 

#eosio.ramfee 内存买卖收取手续费的账户，按照每笔交易千分之5的费率收取手续费
cleos --url $BIOS_HOST create account eosio eosio.ramfee $PUB_KEY_EOSIO 

#eosio.saving 增发EOS临时存放账户，增发总量 5%，其中80%放在此账户，另外 20%再分成25%和75%，分别给eosio.bpay和eosio.vpay
cleos --url $BIOS_HOST create account eosio eosio.saving $PUB_KEY_EOSIO 

#eosio.stake 管理EOS抵押的账户
cleos --url $BIOS_HOST create account eosio eosio.stake $PUB_KEY_EOSIO 

#eosio.token 发行和管理token的账户
cleos --url $BIOS_HOST create account eosio eosio.token $PUB_KEY_EOSIO 

#eosio.vpay 矿工按照获得投票多少比例获取奖励的临时代管账户，增发EOS的1%的75%会先转到这个账户
cleos --url $BIOS_HOST create account eosio eosio.vpay $PUB_KEY_EOSIO

sleep 3s

#set contracts
echo -e "\033[33m ===================================================SET CONTRACTS============================================ \033[0m"

#token contract
cleos --url $BIOS_HOST set contract eosio.token /home/dongxr/workspace/eos/build/contracts/eosio.token/

#msig contract
cleos --url $BIOS_HOST set contract eosio.msig /home/dongxr/workspace/eos/build/contracts/eosio.msig/

sleep 3s

#create token
echo -e "\033[33m ===================================================GENERATE TOKEN=============================================== \033[0m"

cleos --url $BIOS_HOST push action eosio.token create '["eosio", "20000000000.0000 RRV"]' -p eosio.token
cleos --url $BIOS_HOST push action eosio.token issue '["eosio", "20000000000.0000 RRV", "Generate RRV token"]' -p eosio
echo -e "\033[32m Generated 20,000,000,000 RRV for eosio \033[0m"

#cleos --url $BIOS_HOST get accounts $PUB_KEY_EOSIO
sleep 1s

#system contract
cleos --url $BIOS_HOST set contract eosio ./build/contracts/eosio.system/
cleos --url $BIOS_HOST push action eosio setpriv '["eosio.msig", 1]' -p eosio@active

sleep 3s


#create producers & users
echo -e "\033[33m ===================================================CREATE PRODUCERS(3) & USERS(3)=============================================== \033[0m"

#producers
cleos --url $BIOS_HOST system newaccount --transfer eosio producer1 $PUB_KEY_P1 --stake-net "500000000.0000 RRV" --stake-cpu "500000000.0000 RRV" --buy-ram "60000.0000 RRV"
echo -e "\033[32m Newaccount producer1 : staked 500,000,000 RRV for net, 500,000,000 RRV for cpu, and spent 60,000 RRV to buy ram. \033[0m"
sleep 1s
cleos --url $BIOS_HOST transfer eosio producer1 "100000.0000 RRV"
echo -e "\033[32m Transfered 100,000 RRV from eosio to producer1. \033[0m"

cleos --url $BIOS_HOST system newaccount --transfer eosio producer2 $PUB_KEY_P2 --stake-net "500000000.0000 RRV" --stake-cpu "500000000.0000 RRV" --buy-ram "60000.0000 RRV"
echo -e "\033[32m newaccount producer2 : staked 500,000,000 RRV for net, 500,000,000 RRV for cpu, and spent 60,000 RRV to buy ram. \033[0m"
sleep 1s
cleos --url $BIOS_HOST transfer eosio producer2 "100000.0000 RRV"
echo -e "\033[32m Transfered 100,000 RRV from eosio to producer2. \033[0m"

cleos --url $BIOS_HOST system newaccount --transfer eosio producer3 $PUB_KEY_P3 --stake-net "500000000.0000 RRV" --stake-cpu "500000000.0000 RRV" --buy-ram "60000.0000 RRV"
echo -e "\033[32m newaccount producer3 staked 500,000,000 RRV for net, 500,000,000 RRV for cpu, and spent 60,000 RRV to buy ram. \033[0m"
sleep 1s
cleos --url $BIOS_HOST transfer eosio producer3 "100000.0000 RRV"
echo -e "\033[32m Transfered 100,000 RRV from eosio to producer3. \033[0m"


#users
cleos --url $BIOS_HOST system newaccount --transfer eosio user1 $PUB_KEY_U1 --stake-net "100000000.0000 RRV" --stake-cpu "100000000.0000 RRV" --buy-ram "60000.0000 RRV"
echo -e "\033[32m newaccount user1 staked 100,000,000 RRV for net, 100,000,000 RRV for cpu, and spent 60,000 RRV to buy ram. \033[0m"
sleep 1s
cleos --url $BIOS_HOST transfer eosio user1 "50000.0000 RRV"
echo -e "\033[32m Transfered 50,000 RRV from eosio to user1. \033[0m"

cleos --url $BIOS_HOST system newaccount --transfer eosio user2 $PUB_KEY_U2 --stake-net "100000000.0000 RRV" --stake-cpu "100000000.0000 RRV" --buy-ram "60000.0000 RRV"
echo -e "\033[32m newaccount user2 staked 100,000,000 RRV for net, 100,000,000 RRV for cpu, and spent 60,000 RRV to buy ram. \033[0m"
sleep 1s
cleos --url $BIOS_HOST transfer eosio user2 "50000.0000 RRV"
echo -e "\033[32m Transfered 50,000 RRV from eosio to user2. \033[0m"

cleos --url $BIOS_HOST system newaccount --transfer eosio user3 $PUB_KEY_U3 --stake-net "100000000.0000 RRV" --stake-cpu "100000000.0000 RRV" --buy-ram "60000.0000 RRV"
echo -e "\033[32m newaccount user3 staked 100,000,000 RRV for net, 100,000,000 RRV for cpu, and spent 60,000 RRV to buy ram. \033[0m"
sleep 1s
cleos --url $BIOS_HOST transfer eosio user3 "50000.0000 RRV"
echo -e "\033[32m Transfered 50,000 RRV from eosio to user3. \033[0m"

sleep 3s


#register producers
echo -e "\033[33m ===================================================REGISTER PRODUCERS(3)=============================================== \033[0m"

#register producer1
cleos --url $BIOS_HOST system regproducer producer1 $PUB_KEY_P1
echo -e "\033[32m Registed producer : prdoucer1 \033[0m"

#register producer2
cleos --url $BIOS_HOST system regproducer producer2 $PUB_KEY_P2
echo -e "\033[32m Registed producer : prdoucer2 \033[0m"

#register producer3
cleos --url $BIOS_HOST system regproducer producer3 $PUB_KEY_P3
echo -e "\033[32m Registed producer : prdoucer3 \033[0m"

#list producers
#cleos --url $BIOS_HOST system listproducers

sleep 3s

#vote
echo -e "\033[33m ===================================================VOTE============================================ \033[0m"
cleos --url $BIOS_HOST system voteproducer prods user1 producer1
cleos --url $BIOS_HOST system voteproducer prods user2 producer2
cleos --url $BIOS_HOST system voteproducer prods user3 producer3

#list producers
cleos --url $BIOS_HOST system listproducers

