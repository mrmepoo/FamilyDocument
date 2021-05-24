package com.vnpt.cryptoradarserver.strategy;

import com.google.common.base.CaseFormat;
import org.hibernate.boot.model.naming.Identifier;
import org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl;
import org.hibernate.engine.jdbc.env.spi.JdbcEnvironment;

public class UpperTableStrategy extends PhysicalNamingStrategyStandardImpl {
    private static final long serialVersionUID = 1L;

    @Override
    public Identifier toPhysicalTableName(Identifier name, JdbcEnvironment context) {
        //The table name all converted to uppercase
        String tableName = CaseFormat.UPPER_CAMEL.to(CaseFormat.UPPER_UNDERSCORE, name.getText());
        return name.toIdentifier(tableName);
    }

    @Override
    public Identifier toPhysicalColumnName(Identifier name, JdbcEnvironment context) {
        String columnName =CaseFormat.UPPER_CAMEL.to(CaseFormat.UPPER_UNDERSCORE, name.getText());
        return name.toIdentifier(columnName);
    }
}
