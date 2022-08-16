# PostgreSQL Response Codes

Utility to interact with PostgreSQL response codes.

## Usage

Once you require this module, you may call it with either a PostgreSQL response code or a response name. With a code, you will get the code name while with a code name you will get a PostgreSQL response code. It's that simple!!!

## Resources

* <https://www.postgresql.org/docs/current/errcodes-appendix.html>

## API

### API Sample

```javascript
const PostgresResponseCodes = require('postgres-response-codes');

// Print "Unique Violation"
console.log(PostgresResponseCodes['23505']);

// Print "23505"
console.log(PostgresResponseCodes.UNIQUE_VIOLATION);
```

## PostgreSQL Error Codes

### Class 00 — Successful Completion

```javascript
'00000': 'Successful Completion',
'SUCCESSFUL_COMPLETION': '00000',
```

### Class 01 — Warning

```javascript
'01000': 'Warning',
'WARNING': '01000',

'0100C': 'Dynamic Result Sets Returned',
'DYNAMIC_RESULT_SETS_RETURNED': '0100C',

'01008': 'Implicit Zero Bit Padding',
'IMPLICIT_ZERO_BIT_PADDING': '01008',

'01003': 'Null Value Eliminated In Set Function',
'NULL_VALUE_ELIMINATED_IN_SET_FUNCTION': '01003',

'01007': 'Privilege Not Granted',
'PRIVILEGE_NOT_GRANTED': '01007',

'01006': 'Privilege Not Revoked',
'PRIVILEGE_NOT_REVOKED': '01006',

'01004': 'String Data Right Truncation',
'STRING_DATA_RIGHT_TRUNCATION_WARNING': '01004',

'01P01': 'Deprecated Feature',
'DEPRECATED_FEATURE': '01P01',
```

### Class 02 — No Data (this is also a warning class per the SQL standard)

```javascript
'02000': 'No Data',
'NO_DATA': '02000',

'02001': 'No Additional Dynamic Result Sets Returned',
'NO_ADDITIONAL_DYNAMIC_RESULT_SETS_RETURNED': '02001',
```

### Class 03 — SQL Statement Not Yet Complete

```javascript
'03000': 'SQL Statement Not Yet Complete',
'SQL_STATEMENT_NOT_YET_COMPLETE': '03000',
```

### Class 08 — Connection Exception

```javascript
'08000': 'Connection Exception',
'CONNECTION_EXCEPTION': '08000',

'08003': 'Connection Does Not Exist',
'CONNECTION_DOES_NOT_EXIST': '08003',

'08006': 'Connection Failure',
'CONNECTION_FAILURE': '08006',

'08001': 'Sqlclient Unable To Establish Sqlconnection',
'SQLCLIENT_UNABLE_TO_ESTABLISH_SQLCONNECTION': '08001',

'08004': 'Sqlserver Rejected Establishment Of Sqlconnection',
'SQLSERVER_REJECTED_ESTABLISHMENT_OF_SQLCONNECTION': '08004',

'08007': 'Transaction Resolution Unknown',
'TRANSACTION_RESOLUTION_UNKNOWN': '08007',

'08P01': 'Protocol Violation',
'PROTOCOL_VIOLATION': '08P01',
```

### Class 09 — Triggered Action Exception

```javascript
'09000': 'Triggered Action Exception',
'TRIGGERED_ACTION_EXCEPTION': '09000',
```

### Class 0A — Feature Not Supported

```javascript
'0A000': 'Feature Not Supported',
'FEATURE_NOT_SUPPORTED': '0A000',
```

### Class 0B — Invalid Transaction Initiation

```javascript
'0B000': 'Invalid Transaction Initiation',
'INVALID_TRANSACTION_INITIATION': '0B000',
```

### Class 0F — Locator Exception

```javascript
'0F000': 'Locator Exception',
'LOCATOR_EXCEPTION': '0F000',

'0F001': 'Invalid Locator Specification',
'INVALID_LOCATOR_SPECIFICATION': '0F001',
```

### Class 0L — Invalid Grantor

```javascript
'0L000': 'Invalid Grantor',
'INVALID_GRANTOR': '0L000',

'0LP01': 'Invalid Grant Operation',
'INVALID_GRANT_OPERATION': '0LP01',
```

### Class 0P — Invalid Role Specification

```javascript
'0P000': 'Invalid Role Specification',
'INVALID_ROLE_SPECIFICATION': '0P000',
```

### Class 0Z — Diagnostics Exception

```javascript
'0Z000': 'Diagnostics Exception',
'DIAGNOSTICS_EXCEPTION': '0Z000',

'0Z002': 'Stacked Diagnostics Accessed Without Active Handler',
'STACKED_DIAGNOSTICS_ACCESSED_WITHOUT_ACTIVE_HANDLER': '0Z002',
```

### Class 20 — Case Not Found

```javascript
'20000': 'Case Not Found',
'CASE_NOT_FOUND': '20000',
```

### Class 21 — Cardinality Violation

```javascript
'21000': 'Cardinality Violation',
'CARDINALITY_VIOLATION': '21000',
```

### Class 22 — Data Exception

```javascript
'22000': 'Data Exception',
'DATA_EXCEPTION': '22000',

'2202E': 'Array Subscript Error',
'ARRAY_SUBSCRIPT_ERROR': '2202E',

'22021': 'Character Not In Repertoire',
'CHARACTER_NOT_IN_REPERTOIRE': '22021',

'22008': 'Datetime Field Overflow',
'DATETIME_FIELD_OVERFLOW': '22008',

'22012': 'Division By Zero',
'DIVISION_BY_ZERO': '22012',

'22005': 'Error In Assignment',
'ERROR_IN_ASSIGNMENT': '22005',

'2200B': 'Escape Character Conflict',
'ESCAPE_CHARACTER_CONFLICT': '2200B',

'22022': 'Indicator Overflow',
'INDICATOR_OVERFLOW': '22022',

'22015': 'Interval Field Overflow',
'INTERVAL_FIELD_OVERFLOW': '22015',

'2201E': 'Invalid Argument For Logarithm',
'INVALID_ARGUMENT_FOR_LOGARITHM': '2201E',

'22014': 'Invalid Argument For Ntile Function',
'INVALID_ARGUMENT_FOR_NTILE_FUNCTION': '22014',

'22016': 'Invalid Argument For Nth Value Function',
'INVALID_ARGUMENT_FOR_NTH_VALUE_FUNCTION': '22016',

'2201F': 'Invalid Argument For Power Function',
'INVALID_ARGUMENT_FOR_POWER_FUNCTION': '2201F',

'2201G': 'Invalid Argument For Width Bucket Function',
'INVALID_ARGUMENT_FOR_WIDTH_BUCKET_FUNCTION': '2201G',

'22018': 'Invalid Character Value For Cast',
'INVALID_CHARACTER_VALUE_FOR_CAST': '22018',

'22007': 'Invalid Datetime Format',
'INVALID_DATETIME_FORMAT': '22007',

'22019': 'Invalid Escape Character',
'INVALID_ESCAPE_CHARACTER': '22019',

'2200D': 'Invalid Escape Octet',
'INVALID_ESCAPE_OCTET': '2200D',

'22025': 'Invalid Escape Sequence',
'INVALID_ESCAPE_SEQUENCE': '22025',

'22P06': 'Nonstandard Use Of Escape Character',
'NONSTANDARD_USE_OF_ESCAPE_CHARACTER': '22P06',

'22010': 'Invalid Indicator Parameter Value',
'INVALID_INDICATOR_PARAMETER_VALUE': '22010',

'22023': 'Invalid Parameter Value',
'INVALID_PARAMETER_VALUE': '22023',

'2201B': 'Invalid Regular Expression',
'INVALID_REGULAR_EXPRESSION': '2201B',

'2201W': 'Invalid Row Count In Limit Clause',
'INVALID_ROW_COUNT_IN_LIMIT_CLAUSE': '2201W',

'2201X': 'Invalid Row Count In Result Offset Clause',
'INVALID_ROW_COUNT_IN_RESULT_OFFSET_CLAUSE': '2201X',

'22009': 'Invalid Time Zone Displacement Value',
'INVALID_TIME_ZONE_DISPLACEMENT_VALUE': '22009',

'2200C': 'Invalid Use Of Escape Character',
'INVALID_USE_OF_ESCAPE_CHARACTER': '2200C',

'2200G': 'Most Specific Type Mismatch',
'MOST_SPECIFIC_TYPE_MISMATCH': '2200G',

'22004': 'Null Value Not Allowed',
'NULL_VALUE_NOT_ALLOWED': '22004',

'22002': 'Null Value No Indicator Parameter',
'NULL_VALUE_NO_INDICATOR_PARAMETER': '22002',

'22003': 'Numeric Value Out Of Range',
'NUMERIC_VALUE_OUT_OF_RANGE': '22003',

'22026': 'String Data Length Mismatch',
'STRING_DATA_LENGTH_MISMATCH': '22026',

'22001': 'String Data Right Truncation',
'STRING_DATA_RIGHT_TRUNCATION_EXCEPTION': '22001',

'22011': 'Substring Error',
'SUBSTRING_ERROR': '22011',

'22027': 'Trim Error',
'TRIM_ERROR': '22027',

'22024': 'Unterminated C String',
'UNTERMINATED_C_STRING': '22024',

'2200F': 'Zero Length Character String',
'ZERO_LENGTH_CHARACTER_STRING': '2200F',

'22P01': 'Floating Point Exception',
'FLOATING_POINT_EXCEPTION': '22P01',

'22P02': 'Invalid Text Representation',
'INVALID_TEXT_REPRESENTATION': '22P02',

'22P03': 'Invalid Binary Representation',
'INVALID_BINARY_REPRESENTATION': '22P03',

'22P04': 'Bad Copy File Format',
'BAD_COPY_FILE_FORMAT': '22P04',

'22P05': 'Untranslatable Character',
'UNTRANSLATABLE_CHARACTER': '22P05',

'2200L': 'Not An XML Document',
'NOT_AN_XML_DOCUMENT': '2200L',

'2200M': 'Invalid XML Document',
'INVALID_XML_DOCUMENT': '2200M',

'2200N': 'Invalid XML Content',
'INVALID_XML_CONTENT': '2200N',

'2200S': 'Invalid XML Comment',
'INVALID_XML_COMMENT': '2200S',

'2200T': 'Invalid XML Processing Instruction',
'INVALID_XML_PROCESSING_INSTRUCTION': '2200T',
```

### Class 23 — Integrity Constraint Violation

```javascript
'23000': 'Integrity Constraint Violation',
'INTEGRITY_CONSTRAINT_VIOLATION': '23000',

'23001': 'Restrict Violation',
'RESTRICT_VIOLATION': '23001',

'23502': 'Not Null Violation',
'NOT_NULL_VIOLATION': '23502',

'23503': 'Foreign Key Violation',
'FOREIGN_KEY_VIOLATION': '23503',

'23505': 'Unique Violation',
'UNIQUE_VIOLATION': '23505',

'23514': 'Check Violation',
'CHECK_VIOLATION': '23514',

'23P01': 'Exclusion Violation',
'EXCLUSION_VIOLATION': '23P01',
```

### Class 24 — Invalid Cursor State

```javascript
'24000': 'Invalid Cursor State',
'INVALID_CURSOR_STATE': '24000',
```

### Class 25 — Invalid Transaction State

```javascript
'25000': 'Invalid Transaction State',
'INVALID_TRANSACTION_STATE': '25000',

'25001': 'Active SQL Transaction',
'ACTIVE_SQL_TRANSACTION': '25001',

'25002': 'Branch Transaction Already Active',
'BRANCH_TRANSACTION_ALREADY_ACTIVE': '25002',

'25008': 'Held Cursor Requires Same Isolation Level',
'HELD_CURSOR_REQUIRES_SAME_ISOLATION_LEVEL': '25008',

'25003': 'Inappropriate Access Mode For Branch Transaction',
'INAPPROPRIATE_ACCESS_MODE_FOR_BRANCH_TRANSACTION': '25003',

'25004': 'Inappropriate Isolation Level For Branch Transaction',
'INAPPROPRIATE_ISOLATION_LEVEL_FOR_BRANCH_TRANSACTION': '25004',

'25005': 'No Active SQL Transaction For Branch Transaction',
'NO_ACTIVE_SQL_TRANSACTION_FOR_BRANCH_TRANSACTION': '25005',

'25006': 'Read Only SQL Transaction',
'READ_ONLY_SQL_TRANSACTION': '25006',

'25007': 'Schema And Data Statement Mixing Not Supported',
'SCHEMA_AND_DATA_STATEMENT_MIXING_NOT_SUPPORTED': '25007',

'25P01': 'No Active SQL Transaction',
'NO_ACTIVE_SQL_TRANSACTION': '25P01',

'25P02': 'In Failed SQL Transaction',
'IN_FAILED_SQL_TRANSACTION': '25P02',
```

### Class 26 — Invalid SQL Statement Name

```javascript
'26000': 'Invalid SQL Statement Name',
'INVALID_SQL_STATEMENT_NAME': '26000',
```

### Class 27 — Triggered Data Change Violation

```javascript
'27000': 'Triggered Data Change Violation',
'TRIGGERED_DATA_CHANGE_VIOLATION': '27000',
```

### Class 28 — Invalid Authorization Specification

```javascript
'28000': 'Invalid Authorization Specification',
'INVALID_AUTHORIZATION_SPECIFICATION': '28000',

'28P01': 'Invalid Password',
'INVALID_PASSWORD': '28P01',
```

### Class 2B — Dependent Privilege Descriptors Still Exist

```javascript
'2B000': 'Dependent Privilege Descriptors Still Exist',
'DEPENDENT_PRIVILEGE_DESCRIPTORS_STILL_EXIST': '2B000',

'2BP01': 'Dependent Objects Still Exist',
'DEPENDENT_OBJECTS_STILL_EXIST': '2BP01',
```

### Class 2D — Invalid Transaction Termination

```javascript
'2D000': 'Invalid Transaction Termination',
'INVALID_TRANSACTION_TERMINATION': '2D000',
```

### Class 2F — SQL Routine Exception

```javascript
'2F000': 'SQL Routine Exception',
'SQL_ROUTINE_EXCEPTION': '2F000',

'2F005': 'Function Executed No Return Statement',
'FUNCTION_EXECUTED_NO_RETURN_STATEMENT': '2F005',

'2F002': 'Modifying SQL Data Not Permitted',
'SQL_MODIFYING_SQL_DATA_NOT_PERMITTED': '2F002',

'2F003': 'Prohibited SQL Statement Attempted',
'SQL_PROHIBITED_SQL_STATEMENT_ATTEMPTED': '2F003',

'2F004': 'Reading SQL Data Not Permitted',
'SQL_READING_SQL_DATA_NOT_PERMITTED': '2F004',
```

### Class 34 — Invalid Cursor Name

```javascript
'34000': 'Invalid Cursor Name',
'INVALID_CURSOR_NAME': '34000',
```

### Class 38 — External Routine Exception

```javascript
'38000': 'External Routine Exception',
'EXTERNAL_ROUTINE_EXCEPTION': '38000',

'38001': 'Containing SQL Not Permitted',
'CONTAINING_SQL_NOT_PERMITTED': '38001',

'38002': 'Modifying SQL Data Not Permitted',
'EXTERNAL_MODIFYING_SQL_DATA_NOT_PERMITTED': '38002',

'38003': 'Prohibited SQL Statement Attempted',
'EXTERNAL_PROHIBITED_SQL_STATEMENT_ATTEMPTED': '38003',

'38004': 'Reading SQL Data Not Permitted',
'EXTERNAL_READING_SQL_DATA_NOT_PERMITTED': '38004',
```

### Class 39 — External Routine Invocation Exception

```javascript
'39000': 'External Routine Invocation Exception',
'EXTERNAL_ROUTINE_INVOCATION_EXCEPTION': '39000',

'39001': 'Invalid SQLstate Returned',
'INVALID_SQLSTATE_RETURNED': '39001',

'39004': 'Null Value Not Allowed',
'EXTERNAL_NULL_VALUE_NOT_ALLOWED': '39004',

'39P01': 'Trigger Protocol Violated',
'TRIGGER_PROTOCOL_VIOLATED': '39P01',

'39P02': 'SRF Protocol Violated',
'SRF_PROTOCOL_VIOLATED': '39P02',
```

### Class 3B — Savepoint Exception

```javascript
'3B000': 'Savepoint Exception',
'SAVEPOINT_EXCEPTION': '3B000',

'3B001': 'Invalid Savepoint Specification',
'INVALID_SAVEPOINT_SPECIFICATION': '3B001',
```

### Class 3D — Invalid Catalog Name

```javascript
'3D000': 'Invalid Catalog Name',
'INVALID_CATALOG_NAME': '3D000',
```

### Class 3F — Invalid Schema Name

```javascript
'3F000': 'Invalid Schema Name',
'INVALID_SCHEMA_NAME': '3F000',
```

### Class 40 — Transaction Rollback

```javascript
'40000': 'Transaction Rollback',
'TRANSACTION_ROLLBACK': '40000',

'40002': 'Transaction Integrity Constraint Violation',
'TRANSACTION_INTEGRITY_CONSTRAINT_VIOLATION': '40002',

'40001': 'Serialization Failure',
'SERIALIZATION_FAILURE': '40001',

'40003': 'Statement Completion Unknown',
'STATEMENT_COMPLETION_UNKNOWN': '40003',

'40P01': 'Deadlock Detected',
'DEADLOCK_DETECTED': '40P01',
```

### Class 42 — Syntax Error or Access Rule Violation

```javascript
'42000': 'Syntax Error Or Access Rule Violation',
'SYNTAX_ERROR_OR_ACCESS_RULE_VIOLATION': '42000',

'42601': 'Syntax Error',
'SYNTAX_ERROR': '42601',

'42501': 'Insufficient Privilege',
'INSUFFICIENT_PRIVILEGE': '42501',

'42846': 'Cannot Coerce',
'CANNOT_COERCE': '42846',

'42803': 'Grouping Error',
'GROUPING_ERROR': '42803',

'42P20': 'Windowing Error',
'WINDOWING_ERROR': '42P20',

'42P19': 'Invalid Recursion',
'INVALID_RECURSION': '42P19',

'42830': 'Invalid Foreign Key',
'INVALID_FOREIGN_KEY': '42830',

'42602': 'Invalid Name',
'INVALID_NAME': '42602',

'42622': 'Name Too Long',
'NAME_TOO_LONG': '42622',

'42939': 'Reserved Name',
'RESERVED_NAME': '42939',

'42804': 'Datatype Mismatch',
'DATATYPE_MISMATCH': '42804',

'42P18': 'Indeterminate Datatype',
'INDETERMINATE_DATATYPE': '42P18',

'42P21': 'Collation Mismatch',
'COLLATION_MISMATCH': '42P21',

'42P22': 'Indeterminate Collation',
'INDETERMINATE_COLLATION': '42P22',

'42809': 'Wrong Object Type',
'WRONG_OBJECT_TYPE': '42809',

'42703': 'Undefined Column',
'UNDEFINED_COLUMN': '42703',

'42883': 'Undefined Function',
'UNDEFINED_FUNCTION': '42883',

'42P01': 'Undefined Table',
'UNDEFINED_TABLE': '42P01',

'42P02': 'Undefined Parameter',
'UNDEFINED_PARAMETER': '42P02',

'42704': 'Undefined Object',
'UNDEFINED_OBJECT': '42704',

'42701': 'Duplicate Column',
'DUPLICATE_COLUMN': '42701',

'42P03': 'Duplicate Cursor',
'DUPLICATE_CURSOR': '42P03',

'42P04': 'Duplicate Database',
'DUPLICATE_DATABASE': '42P04',

'42723': 'Duplicate Function',
'DUPLICATE_FUNCTION': '42723',

'42P05': 'Duplicate Prepared Statement',
'DUPLICATE_PREPARED_STATEMENT': '42P05',

'42P06': 'Duplicate Schema',
'DUPLICATE_SCHEMA': '42P06',

'42P07': 'Duplicate Table',
'DUPLICATE_TABLE': '42P07',

'42712': 'Duplicate Alias',
'DUPLICATE_ALIAS': '42712',

'42710': 'Duplicate Object',
'DUPLICATE_OBJECT': '42710',

'42702': 'Ambiguous Column',
'AMBIGUOUS_COLUMN': '42702',

'42725': 'Ambiguous Function',
'AMBIGUOUS_FUNCTION': '42725',

'42P08': 'Ambiguous Parameter',
'AMBIGUOUS_PARAMETER': '42P08',

'42P09': 'Ambiguous Alias',
'AMBIGUOUS_ALIAS': '42P09',

'42P10': 'Invalid Column Reference',
'INVALID_COLUMN_REFERENCE': '42P10',

'42611': 'Invalid Column Definition',
'INVALID_COLUMN_DEFINITION': '42611',

'42P11': 'Invalid Cursor Definition',
'INVALID_CURSOR_DEFINITION': '42P11',

'42P12': 'Invalid Database Definition',
'INVALID_DATABASE_DEFINITION': '42P12',

'42P13': 'Invalid Function Definition',
'INVALID_FUNCTION_DEFINITION': '42P13',

'42P14': 'Invalid Prepared Statement Definition',
'INVALID_PREPARED_STATEMENT_DEFINITION': '42P14',

'42P15': 'Invalid Schema Definition',
'INVALID_SCHEMA_DEFINITION': '42P15',

'42P16': 'Invalid Table Definition',
'INVALID_TABLE_DEFINITION': '42P16',

'42P17': 'Invalid Object Definition',
'INVALID_OBJECT_DEFINITION': '42P17',
```

### Class 44 — WITH CHECK OPTION Violation

```javascript
'44000': 'With Check Option Violation',
'WITH_CHECK_OPTION_VIOLATION': '44000',
```

### Class 53 — Insufficient Resources

```javascript
'53000': 'Insufficient Resources',
'INSUFFICIENT_RESOURCES': '53000',

'53100': 'Disk Full',
'DISK_FULL': '53100',

'53200': 'Out Of Memory',
'OUT_OF_MEMORY': '53200',

'53300': 'Too Many Connections',
'TOO_MANY_CONNECTIONS': '53300',

'53400': 'Configuration Limit Exceeded',
'CONFIGURATION_LIMIT_EXCEEDED': '53400',
```

### Class 54 — Program Limit Exceeded

```javascript
'54000': 'Program Limit Exceeded',
'PROGRAM_LIMIT_EXCEEDED': '54000',

'54001': 'Statement Too Complex',
'STATEMENT_TOO_COMPLEX': '54001',

'54011': 'Too Many Columns',
'TOO_MANY_COLUMNS': '54011',

'54023': 'Too Many Arguments',
'TOO_MANY_ARGUMENTS': '54023',
```

### Class 55 — Object Not In Prerequisite State

```javascript
'55000': 'Object Not In Prerequisite State',
'OBJECT_NOT_IN_PREREQUISITE_STATE': '55000',

'55006': 'Object In Use',
'OBJECT_IN_USE': '55006',

'55P02': 'Cant Change Runtime Param',
'CANT_CHANGE_RUNTIME_PARAM': '55P02',

'55P03': 'Lock Not Available',
'LOCK_NOT_AVAILABLE': '55P03',
```

### Class 57 — Operator Intervention

```javascript
'57000': 'Operator Intervention',
'OPERATOR_INTERVENTION': '57000',

'57014': 'Query Canceled',
'QUERY_CANCELED': '57014',

'57P01': 'Admin Shutdown',
'ADMIN_SHUTDOWN': '57P01',

'57P02': 'Crash Shutdown',
'CRASH_SHUTDOWN': '57P02',

'57P03': 'Cannot Connect Now',
'CANNOT_CONNECT_NOW': '57P03',

'57P04': 'Database Dropped',
'DATABASE_DROPPED': '57P04',
```

### Class 58 — System Error (errors external to PostgreSQL itself)

```javascript
'58000': 'System Error',
'SYSTEM_ERROR': '58000',

'58030': 'IO Error',
'IO_ERROR': '58030',

'58P01': 'Undefined File',
'UNDEFINED_FILE': '58P01',

'58P02': 'Duplicate File',
'DUPLICATE_FILE': '58P02',
```

### Class F0 — Configuration File Error

```javascript
'F0000': 'Config File Error',
'CONFIG_FILE_ERROR': 'F0000',

'F0001': 'Lock File Exists',
'LOCK_FILE_EXISTS': 'F0001',
```

### Class HV — Foreign Data Wrapper Error (SQL/MED)

```javascript
'HV000': 'FDW Error',
'FDW_ERROR': 'HV000',

'HV005': 'FDW Column Name Not Found',
'FDW_COLUMN_NAME_NOT_FOUND': 'HV005',

'HV002': 'FDW Dynamic Parameter Value Needed',
'FDW_DYNAMIC_PARAMETER_VALUE_NEEDED': 'HV002',

'HV010': 'FDW Function Sequence Error',
'FDW_FUNCTION_SEQUENCE_ERROR': 'HV010',

'HV021': 'FDW Inconsistent Descriptor Information',
'FDW_INCONSISTENT_DESCRIPTOR_INFORMATION': 'HV021',

'HV024': 'FDW Invalid Attribute Value',
'FDW_INVALID_ATTRIBUTE_VALUE': 'HV024',

'HV007': 'FDW Invalid Column Name',
'FDW_INVALID_COLUMN_NAME': 'HV007',

'HV008': 'FDW Invalid Column Number',
'FDW_INVALID_COLUMN_NUMBER': 'HV008',

'HV004': 'FDW Invalid Data Type',
'FDW_INVALID_DATA_TYPE': 'HV004',

'HV006': 'FDW Invalid Data Type Descriptors',
'FDW_INVALID_DATA_TYPE_DESCRIPTORS': 'HV006',

'HV091': 'FDW Invalid Descriptor Field Identifier',
'FDW_INVALID_DESCRIPTOR_FIELD_IDENTIFIER': 'HV091',

'HV00B': 'FDW Invalid Handle',
'FDW_INVALID_HANDLE': 'HV00B',

'HV00C': 'FDW Invalid Option Index',
'FDW_INVALID_OPTION_INDEX': 'HV00C',

'HV00D': 'FDW Invalid Option Name',
'FDW_INVALID_OPTION_NAME': 'HV00D',

'HV090': 'FDW Invalid String Length Or Buffer Length',
'FDW_INVALID_STRING_LENGTH_OR_BUFFER_LENGTH': 'HV090',

'HV00A': 'FDW Invalid String Format',
'FDW_INVALID_STRING_FORMAT': 'HV00A',

'HV009': 'FDW Invalid Use Of Null Pointer',
'FDW_INVALID_USE_OF_NULL_POINTER': 'HV009',

'HV014': 'FDW Too Many Handles',
'FDW_TOO_MANY_HANDLES': 'HV014',

'HV001': 'FDW Out Of Memory',
'FDW_OUT_OF_MEMORY': 'HV001',

'HV00P': 'FDW No Schemas',
'FDW_NO_SCHEMAS': 'HV00P',

'HV00J': 'FDW Option Name Not Found',
'FDW_OPTION_NAME_NOT_FOUND': 'HV00J',

'HV00K': 'FDW Reply Handle',
'FDW_REPLY_HANDLE': 'HV00K',

'HV00Q': 'FDW Schema Not Found',
'FDW_SCHEMA_NOT_FOUND': 'HV00Q',

'HV00R': 'FDW Table Not Found',
'FDW_TABLE_NOT_FOUND': 'HV00R',

'HV00L': 'FDW Unable To Create Execution',
'FDW_UNABLE_TO_CREATE_EXECUTION': 'HV00L',

'HV00M': 'FDW Unable To Create Reply',
'FDW_UNABLE_TO_CREATE_REPLY': 'HV00M',

'HV00N': 'FDW Unable To Establish Connection',
'FDW_UNABLE_TO_ESTABLISH_CONNECTION': 'HV00N',
```

### Class P0 — PL/pgSQL Error

```javascript
'P0000': 'PLpgSQL Error',
'PLPGSQL_ERROR': 'P0000',

'P0001': 'Raise Exception',
'RAISE_EXCEPTION': 'P0001',

'P0002': 'No Data Found',
'NO_DATA_FOUND': 'P0002',

'P0003': 'Too Many Rows',
'TOO_MANY_ROWS': 'P0003',
```

### Class XX — Internal Error

```javascript
'XX000': 'Internal Error',
'INTERNAL_ERROR': 'XX000',

'XX001': 'Data Corrupted',
'DATA_CORRUPTED': 'XX001',

'XX002': 'Index Corrupted',
'INDEX_CORRUPTED': 'XX002',
```

## Contributors

* Holly Springsteen - <https://github.com/hollyos>
