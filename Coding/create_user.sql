alter session set "_ORACLE_SCRIPT"=true;

CREATE USER vsattp_hg_clone IDENTIFIED BY tungdemo;

GRANT CONNECT, RESOURCE, DBA TO vsattp_hg_clone;

GRANT CREATE SESSION TO vsattp_hg_clone;

GRANT UNLIMITED TABLESPACE TO vsattp_hg_clone;

grant all privileges to vsattp_hg_clone;

----------------------------------
trong truong hop tren server centos
su - oracle
sqlplus / as sysdba
sau đó thực hiện các lệnh trên